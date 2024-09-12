import { useEffect, useState } from "react";




export const DebounceCounter = () => {

    const [counter, setCounter] = useState(0);
    const [debouncedCounter, setDebounceCounter] = useState<number |null>(null)


    const onClick = () => {
   setCounter(prevCounter => prevCounter + 1)

    }

    useEffect(() => {
    const Timeout  = setTimeout(() =>{
        setDebounceCounter(counter)
        },300)

        return () => {
            clearTimeout(Timeout)
        }


    }, [counter])


    useEffect(() => {
        if(debouncedCounter === 0 ) return
        
        console.log('stard')
    
    }, [debouncedCounter])

    

    return {
        onClick,
        counter
    }
};
