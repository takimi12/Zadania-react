import {useEffect, useRef, useState} from "react"



export const ThreCountersGrygierek =() => {


    const [counter, setCounter] = useState(0)
    const intervalHandle = useRef<NodeJS.Timeout | null>(null)

    const handleStart = () => {
        if (intervalHandle.current !== null) return;

        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)
        intervalHandle.current= interval
    }

    const handleStop = () => {
        if (intervalHandle.current === null) return

        clearInterval(intervalHandle.current)
        intervalHandle.current = null;
    }
    const handleReset = () => {
        setCounter(0)
        handleStop()
        handleStart()
    }


    useEffect(() => {
        return () => {
            if(intervalHandle.current !== null) clearInterval(intervalHandle.current)
        }
    }, [])


    return (
    <>
    <h1>  {counter}</h1>

    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop} >Stop</button>
    <button onClick={handleReset} >Reset</button>

    </>
    )
}