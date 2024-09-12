import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Child } from "./Child";
import { ChildWithFunctionProps } from "./ChildWithFunction";


// export const NadmierneRenderowanie = () => {
//    const [counter, seTCounter] = useState(0);

// //    const arr = useRef([5]);

//    const inc = () => {
//     seTCounter(prevCounter => prevCounter + 1)
//    }

//    const arr = useMemo(() => [5], [])

//    return (
//     <div>
//         <button onClick={inc}>+1</button>
//         <Child value={arr} counter={counter} />
//     </div>
//    )
// }

export const ParentFunction = () => {

   const [coounter, seTCounter] = useState(0)

   const foo = useCallback( (value:number) => {
      seTCounter(prevCounter => prevCounter + 1)
   },[])

   return( 
   <div>
   
   <ChildWithFunctionProps callback={foo} />
   </div>
   )
}