import { AztecAddress, ContractBase, ContractFunctionInteraction, ContractMethod, DeployMethod, FieldLike, Wallet } from '@aztec/aztec.js';
import { ContractAbi } from '@aztec/foundation/abi';
import { AztecRPC, PublicKey } from '@aztec/types';
export declare const BlankContractAbi: ContractAbi;
/**
 * Type-safe interface for contract Blank;
 */
export declare class BlankContract extends ContractBase {
    private constructor();
    /**
     * Creates a contract instance.
     * @param address - The deployed contract's address.
     * @param wallet - The wallet to use when interacting with the contract.
     * @returns A promise that resolves to a new Contract instance.
     */
    static at(
    /** The deployed contract's address. */
    address: AztecAddress, 
    /** The wallet. */
    wallet: Wallet): Promise<BlankContract>;
    /**
     * Creates a tx to deploy a new instance of this contract.
     */
    static deploy(rpc: AztecRPC): DeployMethod<BlankContract>;
    /**
     * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
     */
    static deployWithPublicKey(rpc: AztecRPC, publicKey: PublicKey): DeployMethod<BlankContract>;
    /**
     * Returns this contract's ABI.
     */
    static get abi(): ContractAbi;
    /** Type-safe wrappers for the public methods exposed by the contract. */
    methods: {
        /** getPublicKey(address: field) */
        getPublicKey: ((address: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
    };
}
//# sourceMappingURL=blank.d.ts.map