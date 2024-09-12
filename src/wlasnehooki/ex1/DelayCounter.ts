import { useEffect, useState } from "react";




export const useDebounceState = <T>(value:T, delay:number) => {
    const [debouncedValue, setDebounceValue] = useState<T |null>(null)



    useEffect(() => {
    const Timeout  = setTimeout(() =>{
        setDebounceValue(value)
        },delay)

        return () => {
            clearTimeout(Timeout)
        }


    }, [value])



    

    return  debouncedValue
    
};
