import { useCallback, useEffect, useState } from "react"
import { TextInput } from "./Textinput"

export const WrapperHomework =() => {

    const [first, setFirst] = useState('first');
    const [second, setSecond] = useState('second');
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
 
        return () => {
            clearInterval(interval)
        }

    }, [])




    const handleFirstChange = useCallback((value:string) => {
        setFirst(value)
    },[])

    const handleSecondChange = useCallback((value:string) => {
        setSecond(value)
    },[])

return (
    <form>
        <h1>{time.toLocaleDateString()}</h1>
    <TextInput value={first} onChange={handleFirstChange}  />
    <TextInput value={second} onChange={handleSecondChange} />
    </form>
)
}