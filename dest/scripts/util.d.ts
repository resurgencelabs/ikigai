import { AccountWallet, Fr } from '@aztec/aztec.js';
import { FunctionAbi } from '@aztec/foundation/abi';
import { AztecRPC, CompleteAddress } from '@aztec/types';
export declare function convertArgs(functionAbi: FunctionAbi, args: any): Fr[];
/**
 * terminology is confusing, but the `account` points to a smart contract's public key information
 * while the "wallet" has the account's private key and is used to sign transactions
 * we need the "wallet" to actually submit transactions using the "account" identity
 * @param account
 * @param rpc
 * @returns
 */
export declare function getWallet(account: CompleteAddress, rpc: AztecRPC): Promise<AccountWallet>;
//# sourceMappingURL=util.d.ts.map