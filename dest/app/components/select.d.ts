import { DropdownOption, DropdownType } from './dropdown.js';
interface SelectProps<T> {
    options: DropdownOption<T>[];
    dropdownType?: DropdownType;
    showBorder?: boolean;
    allowEmptyValue?: boolean;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    value?: T;
    onChange?: (value?: T) => void;
}
export declare function Select<T>(props: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=select.d.ts.map