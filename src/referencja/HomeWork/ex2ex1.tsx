import {useEffect, useRef, useState} from "react"



export const ThreCounters =() => {

    const inputRef = useRef(0)

    const [counter1, setCounter] = useState(0)
    const [start, setStart]= useState(false)
    const [stop, setStop]= useState(true)
    const [reset,setReset] = useState(false)


    useEffect(() => {
        const interval = setInterval(() => {
        
            inputRef.current++

        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })


    useEffect(() => {
        if(start === true && stop === true) {
        const interval = setInterval(() => {
            setCounter(prevstate => prevstate + 1)
        }, 1000)
    
        return () => {
            clearInterval(interval)
        }
    }
    },[start, stop])
    
    const handleClick =() => {
        setStart(true)
        setStop(true)
    }

    const handleStop =() => {
        setStop(false)
    }

    const handleReset = () => {
setCounter(0)
setStart(true)
setStop(true)
    } 

    return (
    <>
    <h1>  {counter1}</h1>

    <button onClick={handleClick}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </>
    )
}