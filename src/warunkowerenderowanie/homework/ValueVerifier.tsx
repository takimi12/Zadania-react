import { useEffect, useState } from "react";

export const ValueVerifier = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000); 


    return () => {
      clearInterval(intervalId);
    };
  }, []);


  if(counter % 2 === 0 ) return 'liczba jest parzysta' 
  if( counter %3 === 0) return 'Największy dzielnik liczby to 3'
  if( counter %5 === 0) return 'Największy dzielnik liczby to 5'
  if( counter %7 === 0) return 'Największy dzielnik liczby to 7'
  if( counter %9 === 0) return 'Największy dzielnik liczby to 9'

};
