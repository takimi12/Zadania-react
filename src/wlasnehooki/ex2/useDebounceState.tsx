import { useEffect, useState } from "react";

export const UseDebounceState = () => {
    const [counter, setCounter] = useState(0);
    const [debounceCounter, setDebounceCounter] = useState<number | null>(null)

    const onClick = () => {
            setCounter(prevCounter => prevCounter + 1)
    }

    useEffect(() =>{
        const timeout =  setTimeout(() => {
        setDebounceCounter(counter)
        }, 300)

        return () => {
            clearTimeout(timeout)
        }
    }, [counter])




    // useEffect(() => {
    //     if(debounceCounter === 0) return

    // }, [debounceCounter])


    return (
        <div>
<p>{debounceCounter} debounceCounter</p>
            <button onClick={onClick}>Click me</button>
        </div>
    )


};


// import { useEffect, useState } from "react";

// export const UseDebounceState = () => {
//     const [counter, setCounter] = useState(0);
//     const [debounceCounter, setDebounceCounter] = useState(0)

//     const onClick = () => {


//         const timer = setTimeout(() => {
//             setCounter(prevCounter => prevCounter + 1)
//         }, 3010);
        
//         return () => {
//             clearTimeout(timer);
//         };

//     }


//     return (
//         <div>
// <p>{debounceCounter} dd</p>
//     <p>            {counter}</p>
//             <button onClick={onClick}>Click me</button>
//         </div>
//     )


// };
