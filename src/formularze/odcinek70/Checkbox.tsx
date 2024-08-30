import { FieldErrors } from "./FieldErrors"
import {FormChangeEvent } from "../odcinek70/index"

type CheckboxProps =  {
    name:string;
    errors: string[];
    checked: boolean;
    label: string;
    onChange: (e:FormChangeEvent) => void;
}

export const Checkbox = ({name, errors, label, checked, onChange}: CheckboxProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} type='checkbox' checked={checked} onChange={onChange} />
            <FieldErrors errors={errors} />
        </div>
    )
}