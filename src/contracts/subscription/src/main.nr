mod asset_note;
mod Token_interface;

contract Subscription {
    use dep::std::option::Option;
    use dep::value_note::{
        balance_utils,
        utils::{increment, decrement},
        value_note::{VALUE_NOTE_LEN, ValueNote, ValueNoteMethods},
    };
    use dep::aztec::{
        context::{PrivateContext, PublicContext, Context},
        note::{
            note_header::NoteHeader,
            note_getter_options::NoteGetterOptions,
            utils as note_utils,
        },
        state_vars::{map::Map, set::Set, public_state::PublicState, singleton::Singleton},
        types::type_serialization::{
            field_serialization::{FieldSerializationMethods, FIELD_SERIALIZED_LEN},
            bool_serialization::{BoolSerializationMethods, BOOL_SERIALIZED_LEN},
            aztec_address_serialization::{AztecAddressSerializationMethods, AZTEC_ADDRESS_SERIALIZED_LEN},
        },
        types::address::{AztecAddress},
        selector::compute_selector,
        log::emit_encrypted_log,
        oracle::get_public_key::get_public_key,
    };
    use dep::authwit::{
        auth::{
            assert_current_call_valid_authwit, 
            assert_current_call_valid_authwit_public,
            IS_VALID_SELECTOR,
            compute_authwit_message_hash, 
        },
    };

    use crate::asset_note::{AssetNote, AssetNoteMethods, ASSET_NOTE_LEN};
    use crate::Token_interface::{TokenPrivateContextInterface, FromTransferStruct, ToTransferStruct};

    struct Storage {
        // the attributes of the strictly private NFT
        nft_data: Map<Set<AssetNote, ASSET_NOTE_LEN>>,
        
        
    }

    impl Storage {
        fn init(context: Context) -> pub Self {
            Storage {
                nft_data: Map::new(
                    context,
                    1, // Storage slot
                    |context, slot| {
                        Set::new(context, slot, AssetNoteMethods)
                    },
                ),     
            }
        }
    }

    // Constructs the contract with no parameters required
    #[aztec(private)]
    fn constructor( )  {}

    
   
    
    // The minting function that takes the project id, tier id, expiry epoch and a secret code (in case you want to 
    // transfer said NFT to a friend)
    #[aztec(private)]
    fn subscribe_and_mint( 
        proj: Field,
        exp: Field,
        cd: Field,
        token_contract: AztecAddress,
        beneficiary: Field,
        amount: Field,
        nonce: Field,
    ) {
        let mut tr = 0 as Field;
        if (amount as u32 >= 100){
            tr = 1;
        }
        if (amount as u32 >= 200){
            tr = 2;
        }
        if (amount as u32 >= 500){
            tr = 3;
        }
        if (amount as u32 >= 1000){
            tr = 4;
        }
        if (amount as u32 >= 2000){
            tr = 5;
        }

        let owner = context.msg_sender();
       
       
        let from = FromTransferStruct{address: owner};
        let to = ToTransferStruct{address: beneficiary};
        
        let res = TokenPrivateContextInterface::at(token_contract.address).transfer(&mut context, from, to, amount, nonce);
        assert (res[0] == 1);

        let mut owner_note = AssetNote::new(owner, proj, tr, exp, cd);

        let owner_set = storage.nft_data.at(owner);
        owner_set.insert(&mut owner_note, true);
    }

    // No transfer method because this is an instance of a Soul Bound Private NFT


    // Reads all notes under the given caller id Field, and asserts if the number of such notes is
    // at least n
    #[aztec(private)]
    fn assert_note(n: Field){
        let owner = context.msg_sender();
        let options = NoteGetterOptions::new();
        let owner_notes = storage.nft_data.at(owner);
        let maybe_notes = owner_notes.get_notes(options);
        //let selector = compute_selector("_check_id_match(Field)");
        //context.call_public_function(context.this_address(), selector, [maybe_notes.len()]);
        assert (maybe_notes[n - 1].is_some());

    }

    // checks if the user if a subscriber of the given tier for the given project, with the current timestamp
    // epoch also being provided as an argument
    #[aztec(private)]
    fn is_subscriber(proj: Field, tier: Field, now: Field) {
        let owner = context.msg_sender();
        let options = NoteGetterOptions::new();
        let owner_notes = storage.nft_data.at(owner);
        let maybe_notes = owner_notes.get_notes(options);
        let mut tmax: Field = 0;
        for i in 0..maybe_notes.len() {
            if maybe_notes[i].is_some() {
                let note = maybe_notes[i].unwrap_unchecked();
                if ((note.project as u32 == proj as u32) & (note.expiry as u32 > now as u32)) {
                    if (tmax as u32 < note.tier as u32) {
                        tmax = note.tier;
                    }
                }
            }
        }
        assert (tmax as u32 >= tier as u32);
        
    }

   
   

    // Computes note hash and nullifier.
    // Note 1: Needs to be defined by every contract producing logs.
    // Note 2: Having it in all the contracts gives us the ability to compute the note hash and nullifier differently for different kind of notes.
    unconstrained fn compute_note_hash_and_nullifier(contract_address: Field, nonce: Field, storage_slot: Field, preimage: [Field; ASSET_NOTE_LEN]) -> [Field; 4] {
        let note_header = NoteHeader::new(contract_address, nonce, storage_slot);
        note_utils::compute_note_hash_and_nullifier(AssetNoteMethods, note_header, preimage)
    }
}