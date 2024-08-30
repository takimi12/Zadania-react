import { useEffect, useState } from "react";



export const UseCounter2 = () => {
const [counter, setCounter]= useState(0)

useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 500); 


    return () => {
      clearInterval(intervalId);
    };
  }, []);

return (
    <p>{counter}</p>
)
    
};
