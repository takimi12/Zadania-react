import { useEffect, useState } from "react";

 function HouseWorkUseEffect2  ()  {
    const [counter, setCounter] = useState(0);
    const [intervalTime, setIntervalTime] =  useState(1000)

    useEffect(() =>{
    const interval = setInterval(() => {

            setCounter(prevCounter => prevCounter + 1)

        }, intervalTime )

        
        return () => {
            clearInterval(interval)
        }
    }, [intervalTime])

    useEffect(() => {
        document.title = `Wartość licznika to ${counter}`;
    }, [counter]);



    return (
        <>



        </>
    );
};
export default HouseWorkUseEffect2;

 