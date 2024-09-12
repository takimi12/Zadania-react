import { GrandChild } from "./GrandChild";
import {memo, useMemo } from 'react'


type Counter = {
  counter:number;
  counter1:number;
}

export const Child = memo(({counter,counter1} : Counter )=> {

  const generateArray = (howMany:number) => {
    const array:number [] = []

    for(let i=0; 1 < howMany; i++){
      array.push(Math.round(Math.random() * 1000))
    }

    return array;
  }

  const elements = useMemo( () => generateArray(counter1), [counter])



  return (
    <>
    <h2> Child</h2>
    <GrandChild  array={elements} />
    </>
)
})