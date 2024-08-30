import { useEffect, useState } from "react";

type Props = {
    val1:number;
    val2:number;
}


export const UseCounter = (initialValue:number, delay:number) => {
const [counter, setCounter]= useState(initialValue)

useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, delay); 


    return () => {
      clearInterval(intervalId);
    };
  }, []);

return (
    counter
)
    
};
