import { AztecAddress, CompleteAddress, Fr } from '@aztec/aztec.js';
import { ContractAbi } from '@aztec/foundation/abi';
import { AztecRPC } from '@aztec/types';
export declare function deployContract(activeWallet: CompleteAddress, contractAbi: ContractAbi, typedArgs: Fr[], // encode prior to passing in
salt: Fr, client: AztecRPC): Promise<AztecAddress>;
//# sourceMappingURL=deploy_contract.d.ts.map