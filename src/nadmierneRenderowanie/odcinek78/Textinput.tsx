import { ChangeEvent, memo } from "react";

type TextInput = {
    value:string;
    onChange: (value:string) => void;
}

export const TextInput = memo(({value, onChange} : TextInput) => {

    const hadnleChange = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
  
    return (
        <input type="text" value={value} onChange={hadnleChange} /> 
    );
})
  