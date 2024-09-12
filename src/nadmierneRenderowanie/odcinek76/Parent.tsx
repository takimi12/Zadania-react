import { useEffect, useState } from "react";
import { Child } from "./Child";
import { GrandChild } from "./GrandChild";




export const Wrapper =() => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000); 
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter1(prev => prev + 1);
      }, 1000); 
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
  return (
    <>
    <p>{counter}</p>
    <Child counter={counter} counter1={counter1} />
    </>
  );
}
