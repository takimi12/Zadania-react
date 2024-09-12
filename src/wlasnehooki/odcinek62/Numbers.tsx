import { useState } from "react"
import { useNumbers } from "./useNumbers"


export const Numbers = () => {
const {numbers,handleClick, removeElement} = useNumbers();
   

    return (
        <>
    <div>{numbers.map((el,index) =>

    <div key={index}>
    <p >{el}</p>
    <button onClick={() => removeElement(index)}>Usun element</button>
    </div>
    )}

    </div>
          <button onClick={handleClick}>
Click me
        </button>
        </>
    )
  }
  
  
  