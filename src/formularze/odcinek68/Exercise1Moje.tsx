import React, {  useState } from "react";


export const FormEx1Moje = () => {

    const [selectValue, setSelectValue ] = useState('')

    const handleTextArea = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value)
    }

    


return (
    <>
<select value={selectValue} onChange={handleTextArea}>
    {!selectValue  && <option value="">Select an option</option>}
    <option value="opcja 1">opcja 1</option>
    <option value="opcja 2">opcja 2</option>
    <option value="opcja 3">opcja 3</option>
</select>
<textarea value={selectValue}></textarea>

</>
)
};