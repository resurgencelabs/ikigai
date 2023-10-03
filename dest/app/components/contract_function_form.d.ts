import { AztecAddress, CompleteAddress } from '@aztec/aztec.js';
import { ContractAbi, FunctionAbi } from '@aztec/foundation/abi';
interface ContractFunctionFormProps {
    wallet: CompleteAddress;
    contractAddress?: AztecAddress;
    contractAbi: ContractAbi;
    functionAbi: FunctionAbi;
    title?: string;
    buttonText?: string;
    isLoading: boolean;
    disabled: boolean;
    onSubmit: () => void;
    onSuccess: (result: any) => void;
    onError: (msg: string) => void;
}
export declare function ContractFunctionForm({ wallet, contractAddress, contractAbi, functionAbi, buttonText, isLoading, disabled, onSubmit, onSuccess, onError, }: ContractFunctionFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=contract_function_form.d.ts.map