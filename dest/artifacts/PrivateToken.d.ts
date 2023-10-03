import { AztecAddress, ContractBase, ContractFunctionInteraction, ContractMethod, DeployMethod, FieldLike, Wallet } from '@aztec/aztec.js';
import { ContractAbi } from '@aztec/foundation/abi';
import { AztecRPC, PublicKey } from '@aztec/types';
export declare const PrivateTokenContractAbi: ContractAbi;
/**
 * Type-safe interface for contract PrivateToken;
 */
export declare class PrivateTokenContract extends ContractBase {
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
    wallet: Wallet): Promise<PrivateTokenContract>;
    /**
     * Creates a tx to deploy a new instance of this contract.
     */
    static deploy(rpc: AztecRPC, initial_supply: FieldLike, owner: FieldLike): DeployMethod<PrivateTokenContract>;
    /**
     * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
     */
    static deployWithPublicKey(rpc: AztecRPC, publicKey: PublicKey, initial_supply: FieldLike, owner: FieldLike): DeployMethod<PrivateTokenContract>;
    /**
     * Returns this contract's ABI.
     */
    static get abi(): ContractAbi;
    /** Type-safe wrappers for the public methods exposed by the contract. */
    methods: {
        /** compute_note_hash_and_nullifier(contract_address: field, nonce: field, storage_slot: field, preimage: array) */
        compute_note_hash_and_nullifier: ((contract_address: FieldLike, nonce: FieldLike, storage_slot: FieldLike, preimage: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** getBalance(owner: field) */
        getBalance: ((owner: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** mint(amount: field, owner: field) */
        mint: ((amount: FieldLike, owner: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** transfer(amount: field, recipient: field) */
        transfer: ((amount: FieldLike, recipient: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
    };
}
//# sourceMappingURL=PrivateToken.d.ts.map