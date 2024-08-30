// tylko w komponencie funkcyjnym

import { useState } from "react"


const [text, setText ] = useState("lorem impsum")



// Funkcja zmieniajaca stan na 2 sposoby


// 1. Przeakazanie nowej wartości stanu
handleClick = () => {
    setText("Dolor sit ament")
}
 


const [counter, setCounter] = useState(1)

// 2. Uzalenienie nowej wartości od poprzedniego stanu przekazując funkcję do funkcji zmieniającej stan
const handleClick = ()=>{
    setCounter(prevCounter => prevCounter +1)
}



export const App = () => {
    const [counter, setCounter] = useState(o)



    const increment = ()=>{
        setCounter(prevCounter => prevCounter +1)
    }

    const reset = ()=>{
        setCounter(0)
    }

    // useState jest funkcją generyczną, więc mozemy przekazac typ ktory chcemy przekazywac w srodku


    const [users, setUsers] = useState<SingleUser[]>([])
    const [address, setAdress] = useState<Address | null>(null)




    return (
        <>
        <h1>{counter}</h1>
        <button onClick={increment}> +1</button>
        <button onClick={reset}> +1</button>
    </>
    )
}