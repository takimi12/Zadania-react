import { ChangeEvent, useEffect, useState } from "react"
import { useInput } from "../hooks/useInput"

export const Exercise169 = () => {

    const selectInput = useInput('')
    const[value, setValue] = useState('')

    useEffect(() => {
        setValue(selectInput.value)
    }, [selectInput.value])

    return (
        <>
        <select {...selectInput}>
            {!selectInput.value && <option value="">Select an option</option>}
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="third">Third</option>
        </select>
        <input type="text" name="value" value={value} readOnly  />
        </>
    )
}