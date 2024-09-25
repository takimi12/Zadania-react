import { useState } from "react"


export const UseState43v1 = () => {
    const [words, setWord] = useState("")
    const [counter, setCounter] = useState(0)

 const arrayLetters  =['h','e','l','l','o',' ','w','o','r','l','d']

const handleAdd = () => {


    setCounter(prev => prev +1)
if (counter <  arrayLetters.length){
    setWord(`${words}`+ `${arrayLetters[counter]  }`)
 
}

}





    return (
        <>
    <h1>{words}</h1>
    <button onClick={handleAdd}> Dodaj literę</button>
         </>
    )
}