import { CompleteAddress } from '@aztec/aztec.js';
interface Props {
    selected: CompleteAddress | undefined;
    onSelectChange: (value: CompleteAddress) => void;
    onError: (msg: string) => void;
}
export declare function WalletDropdown({ selected, onSelectChange, onError }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=wallet_dropdown.d.ts.map