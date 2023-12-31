
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractMethod,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  Point,
  PublicKey,
  Wallet,
} from '@aztec/aztec.js';
import SubscriptionContractArtifactJson from '../target/Subscription.json' assert { type: 'json' };
export const SubscriptionContractArtifact = SubscriptionContractArtifactJson as ContractArtifact;

/**
 * Type-safe interface for contract Subscription;
 */
export class SubscriptionContract extends ContractBase {
  
  private constructor(
    completeAddress: CompleteAddress,
    wallet: Wallet,
    portalContract = EthAddress.ZERO
  ) {
    super(completeAddress, SubscriptionContractArtifact, wallet, portalContract);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, SubscriptionContract.artifact, wallet) as Promise<SubscriptionContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, ) {
    return new DeployMethod<SubscriptionContract>(Point.ZERO, wallet, SubscriptionContractArtifact, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, ) {
    return new DeployMethod<SubscriptionContract>(publicKey, wallet, SubscriptionContractArtifact, Array.from(arguments).slice(2));
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return SubscriptionContractArtifact;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** assert_note(n: field) */
    assert_note: ((n: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_nullifier(contract_address: field, nonce: field, storage_slot: field, preimage: array) */
    compute_note_hash_and_nullifier: ((contract_address: FieldLike, nonce: FieldLike, storage_slot: FieldLike, preimage: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** is_subscriber(proj: field, tier: field, now: field) */
    is_subscriber: ((proj: FieldLike, tier: FieldLike, now: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** subscribe_and_mint(proj: field, exp: field, cd: field, token_contract: struct, beneficiary: field, amount: field, nonce: field) */
    subscribe_and_mint: ((proj: FieldLike, exp: FieldLike, cd: FieldLike, token_contract: AztecAddressLike, beneficiary: FieldLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
