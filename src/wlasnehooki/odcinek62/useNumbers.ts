import { useState } from "react";



export const useNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([])

  const handleClick = () => {
      setNumbers(prevNumbers => [...prevNumbers, Math.floor(Math.random() * 10)]);
  }

  const removeElement = (id:number) => {
      setNumbers((prevNumbers) => prevNumbers.filter((_, index) => index !== id));
  }


  return {
    numbers,
    handleClick,
    removeElement
  }

}


