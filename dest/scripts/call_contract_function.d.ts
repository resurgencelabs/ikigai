import { AztecAddress, AztecRPC, CompleteAddress } from '@aztec/aztec.js';
import { ContractAbi } from '@aztec/foundation/abi';
export declare function callContractFunction(address: AztecAddress, abi: ContractAbi, functionName: string, typedArgs: any[], // for the exposed functions, this is an array of field elements Fr[]
rpc: AztecRPC, wallet: CompleteAddress): Promise<string>;
//# sourceMappingURL=call_contract_function.d.ts.map