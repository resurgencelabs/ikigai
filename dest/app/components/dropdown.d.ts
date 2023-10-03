import { CSSProperties } from 'react';
export declare enum DropdownType {
    Simple = "Simple",
    Fees = "Fees"
}
interface DropdownProps<T> {
    options: DropdownOption<T>[];
    isOpen?: boolean;
    className?: string;
    style?: CSSProperties;
    onClose?: () => void;
    onClick?: (option: DropdownOption<T>) => void;
}
export interface DropdownOption<T> {
    value: T;
    label: string;
    sublabel?: string;
    image?: string;
    disabled?: boolean;
}
export declare function Dropdown<T>(props: DropdownProps<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=dropdown.d.ts.map