import { RoleModel } from "./Role";


export interface InputFieldProps {
    icon: string;
    placeholder: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }



  export interface SelectorModel {
    data: RoleModel[];
    icon: string | null;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}