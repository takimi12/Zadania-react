import { FieldErrors } from "./FieldErrors"
import {FormChangeEvent } from "../odcinek70/index"

type FieldProps =  {
    name:string;
    errors: string[];
    value:string ;
    label: string;
    type: 'text' | 'password' ;
    onChange: (e:FormChangeEvent) => void;
}

export const Field = ({name, errors, label, type, value, onChange}:FieldProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
        <input name={name} id={name} type={type} value={value} onChange={onChange} />
            <FieldErrors errors={errors} />
        </div>
    )
}