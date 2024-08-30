import { useEffect, useState } from "react";

export const UseEffectCounter = () => {
    const [counter, setCounter] = useState(0);
    const [intervalTime, setIntervalTime] =  useState(1000)

    useEffect(() =>{
    const interval = setInterval(() => {
        console.log('tick')
            setCounter(prevCounter => prevCounter + 1)
        }, intervalTime )

        
        return () => {
            clearInterval(interval)
        }
    }, [intervalTime])

    const increaseTime = () => {
        setIntervalTime(prevTime => prevTime + 1000)
    }


    return (
        <>
         <h1>{counter}</h1>
         <button onClick={increaseTime}> {intervalTime}</button>

        </>
    );
};


// co powinno byc obslugiwane w useeffect
// 1. tworzenie interwałów
// 2. tworzenie timeoutow
// 3. laczenie sie z Api
// 4. uruchamianie polaczenia z websocketami
// 5. otwiernanie innych polaczen

 