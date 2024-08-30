import { useEffect, useState } from "react";

export const Render = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000); 


    return () => {
      clearInterval(intervalId);
    };
  }, []);



};
