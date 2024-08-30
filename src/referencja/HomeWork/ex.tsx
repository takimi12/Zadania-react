import {useEffect, useRef, useState} from "react"



export const CounterLets =() => {

    const inputRef = useRef(0)

    const [counter1, setCounter] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
        
            inputRef.current++

        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevstate => prevstate + 1)
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    })


    return <h1> {inputRef.current} | {counter1}</h1>

}