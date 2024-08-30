import { useMemo, useRef, useState } from "react"
import { Child } from "./Child";


export const NadmierneRenderowanie = () => {
   const [counter, seTCounter] = useState(0);

//    const arr = useRef([5]);

   const inc = () => {
    seTCounter(prevCounter => prevCounter + 1)
   }

   const arr = useMemo(() => [5], [])

   return (
    <div>
        <button onClick={inc}>+1</button>
        <Child value={arr} counter={counter} />
    </div>
   )
}