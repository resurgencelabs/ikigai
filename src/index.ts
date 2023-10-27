import { TokenContractArtifact } from './contracts/token/types/Token.js';
import { SubscriptionContractArtifact } from './contracts/subscription/types/Subscription.js';
import {
  AccountWallet,
  AztecAddress,
  CompleteAddress,
  Contract,
  DeployMethod,
  Fr,
  PXE,
  TxReceipt,
  createPXEClient,
  getSandboxAccountsWallets,
} from '@aztec/aztec.js';
import { ContractArtifact, FunctionArtifact, encodeArguments } from '@aztec/foundation/abi';
import { FieldsOf } from '@aztec/foundation/types';

export const tokenArtifact: ContractArtifact = TokenContractArtifact;
export const subsArtifact: ContractArtifact = SubscriptionContractArtifact;

export const PXE_URL: string = process.env.PXE_URL || 'http://localhost:8080';
export const pxe: PXE = createPXEClient(PXE_URL);

let tokenContractAddress: string = '';
let subsContractAddress: string = '';

// interaction with the buttons, but conditional check so node env can also import from this file
if (typeof document !== 'undefined') {
  document.getElementById('deploy_t')?.addEventListener('click', async () => {
    tokenContractAddress = await handleDeployTokenClick();
    // eslint-disable-next-line no-console
    console.log('Token Deployment Succeeded, contract deployed at', tokenContractAddress);
  });

  document.getElementById('interact_t')?.addEventListener('click', async () => {
    const interactionResult = await handleInteractTokenClick(tokenContractAddress);
    // eslint-disable-next-line no-console
    console.log('Token Minting transaction succeeded', interactionResult);
  });

  document.getElementById('deploy_s')?.addEventListener('click', async () => {
    subsContractAddress = await handleDeploySubsClick();
    // eslint-disable-next-line no-console
    console.log('Subscription Contract Deployment Succeeded, contract deployed at', subsContractAddress);
  });

  document.getElementById('interact_s')?.addEventListener('click', async () => {
    const interactionResult = await handleInteractSubsClick(subsContractAddress);
    // eslint-disable-next-line no-console
    console.log('NFT Minting transaction succeeded', interactionResult);
  });
}

export async function handleDeployTokenClick(): Promise<string> {
  // eslint-disable-next-line no-console
  console.log('Deploying Contract');
  const [wallet, ..._rest] = await getSandboxAccountsWallets(pxe);
  const accounts = await getSandboxAccountsWallets(pxe);
  const aliceWallet = accounts[0];
  const aliceFr = new Fr(aliceWallet.getAddress());
  const contractAztecAddress = await deployContract(
    wallet.getCompleteAddress(),
    tokenArtifact,
    [aliceFr],
    Fr.random(),
    pxe,
  );

  return contractAztecAddress.toString();
}

export async function handleDeploySubsClick(): Promise<string> {
  // eslint-disable-next-line no-console
  console.log('Deploying Contract');
  const [wallet, ..._rest] = await getSandboxAccountsWallets(pxe);

  const contractAztecAddress = await deployContract(
    wallet.getCompleteAddress(),
    subsArtifact,
    [],
    Fr.random(),
    pxe,
  );

  return contractAztecAddress.toString();
}

export async function handleInteractTokenClick(contractAddress: string) {
  const [wallet, ..._rest] = await getSandboxAccountsWallets(pxe);
  const callArgs = { address: wallet.getCompleteAddress().address };
  const getPkAbi = getFunctionAbi(tokenArtifact, 'getPublicKey');
  const typedArgs = convertArgs(getPkAbi, callArgs);

  // eslint-disable-next-line no-console
  console.log('Interacting with Contract');

  return await callContractFunction(
    AztecAddress.fromString(contractAddress),
    tokenArtifact,
    'getPublicKey',
    typedArgs,
    pxe,
    wallet.getCompleteAddress(),
  );
}

export async function handleInteractSubsClick(contractAddress: string) {
  const [wallet, ..._rest] = await getSandboxAccountsWallets(pxe);
  const callArgs = { address: wallet.getCompleteAddress().address };
  const getPkAbi = getFunctionAbi(subsArtifact, 'getPublicKey');
  const typedArgs = convertArgs(getPkAbi, callArgs);

  // eslint-disable-next-line no-console
  console.log('Interacting with Contract');

  return await callContractFunction(
    AztecAddress.fromString(contractAddress),
    subsArtifact,
    'getPublicKey',
    typedArgs,
    pxe,
    wallet.getCompleteAddress(),
  );
}

export const getFunctionAbi = (contractAbi: any, functionName: string) => {
  const functionAbi = contractAbi.functions.find((f: FunctionArtifact) => f.name === functionName);
  if (!functionAbi) throw new Error(`Function ${functionName} not found in abi`);
  return functionAbi;
};

export async function callContractFunction(
  address: AztecAddress,
  artifact: ContractArtifact,
  functionName: string,
  typedArgs: any[], // for the exposed functions, this is an array of field elements Fr[]
  pxe: PXE,
  wallet: CompleteAddress,
): Promise<FieldsOf<TxReceipt>> {
  // selectedWallet is how we specify the "sender" of the transaction
  const selectedWallet = await getWallet(wallet, pxe);

  // Note: when you start implementing the contract with more methods, it may be useful
  // to use the typescript class for your contract generated by the `yarn compile` command,
  // which provides an object with methods corresponding to the noir contract functions
  // that are named and typed and can be called directly.
  const contract = await Contract.at(address, artifact, selectedWallet);

  return contract.methods[functionName](...typedArgs)
    .send()
    .wait();
}

/**
 * terminology is confusing, but the `account` points to a smart contract's public key information
 * while the "wallet" has the account's private key and is used to sign transactions
 * we need the "wallet" to actually submit transactions using the "account" identity
 * @param account
 * @param pxe
 * @returns
 */
export async function getWallet(account: CompleteAddress, pxe: PXE): Promise<AccountWallet> {
  const accountWallets: AccountWallet[] = await getSandboxAccountsWallets(pxe);
  const selectedWallet: AccountWallet = accountWallets.find(w => w.getAddress().equals(account.address))!;
  if (!selectedWallet) {
    throw new Error(`Wallet for account ${account.address.toShortString()} not found in the PXE.`);
  }
  return selectedWallet;
}

export async function deployContract(
  activeWallet: CompleteAddress,
  artifact: ContractArtifact,
  typedArgs: Fr[], // encode prior to passing in
  salt: Fr,
  client: PXE,
): Promise<AztecAddress> {
  const tx = new DeployMethod(activeWallet.publicKey, client, artifact, typedArgs).send({
    contractAddressSalt: salt,
  });
  await tx.wait();
  const receipt = await tx.getReceipt();
  if (receipt.contractAddress) {
    return receipt.contractAddress;
  } else {
    throw new Error(`Contract not deployed (${receipt.toJSON()})`);
  }
}

export function convertArgs(functionArtifact: FunctionArtifact, args: any): Fr[] {
  const untypedArgs = functionArtifact.parameters.map(param => {
    switch (param.type.kind) {
      case 'field':
        // hack: addresses are stored as string in the form to avoid bigint compatibility issues with formik
        // convert those back to bigints before turning into Fr
        return BigInt(args[param.name]);
      default:
        // need more testing on other types
        return args[param.name];
    }
  });

  return encodeArguments(functionArtifact, untypedArgs);
}
