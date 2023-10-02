import { AccountWallet, AztecAddress, AztecRPC, CompleteAddress, Fr } from '@aztec/aztec.js';
import { ContractAbi, FunctionAbi } from '@aztec/foundation/abi';
export declare const contractAbi: ContractAbi;
export declare const SANDBOX_URL: string;
export declare const rpcClient: AztecRPC;
export declare const CONTRACT_ADDRESS_PARAM_NAMES: string[];
export declare const FILTERED_FUNCTION_NAMES: never[];
export declare const DEFAULT_PUBLIC_ADDRESS: string;
export declare const getFunctionAbi: (contractAbi: any, functionName: string) => any;
export declare function callContractFunction(address: AztecAddress, abi: ContractAbi, functionName: string, typedArgs: any[], // for the exposed functions, this is an array of field elements Fr[]
rpc: AztecRPC, wallet: CompleteAddress): Promise<string>;
/**
 * terminology is confusing, but the `account` points to a smart contract's public key information
 * while the "wallet" has the account's private key and is used to sign transactions
 * we need the "wallet" to actually submit transactions using the "account" identity
 * @param account
 * @param rpc
 * @returns
 */
export declare function getWallet(account: CompleteAddress, rpc: AztecRPC): Promise<AccountWallet>;
export declare function deployContract(activeWallet: CompleteAddress, contractAbi: ContractAbi, typedArgs: Fr[], // encode prior to passing in
salt: Fr, client: AztecRPC): Promise<AztecAddress>;
export declare function convertArgs(functionAbi: FunctionAbi, args: any): Fr[];
//# sourceMappingURL=index.d.ts.map