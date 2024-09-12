import { useEffect, useState } from "react"
import { useDebounceState } from "./DelayCounter";


export const Exercise2Extra= () => {
    const [value, setValue] = useState('');

    const debounceValue = useDebounceState(value, 1000)


    const handleClick = () => {
        setValue(prevValue => `${prevValue} ${Math.round(Math.random() * 9)}`)
    }

    useEffect(() => {
        console.log(' ssss', value)
    }, [debounceValue])

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleClick}>Add letter</button>
        </div>
    )
}