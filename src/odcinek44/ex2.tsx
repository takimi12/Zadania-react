import { useState } from "react"


export const RandomNumberGenerator = () => {

const[country, setCountry]= useState({
name:'Warszawa',
street:'targowa',
countrys:'Poland'})


const array = [
    {
        name:'Warszawa',
        street:'targowa',
        countrys:'Poland'
    },
    {
        name:'Warszawa1',
        street:'targowa2',
        countrys:'Poland3'
    },
]

const handleClick = () => {
// setCountry({name:'lol', street: ';d', countrys: 'ddd'})
setCountry(array[Math.floor(Math.random() * array.length)])
}




    return (
        <>
     <h1>{country.countrys}, {country.name}, {country.street}</h1>
        <button onClick={handleClick}>KLIK</button>
          </>
    )
}
// import { useState } from "react"


// export const RandomNumberGenerator = () => {
 
//     const [count, setCount] = useState<number[]>([]);

//     const handleClick = () => {
//         setCount(prevCount => [...prevCount, Math.floor(Math.random() * 100)]);
//     };


//     return (
//         <>
//         <ul>
//             {count.map(el => <li>{el}</li>) }
//         </ul>
//         <button onClick={handleClick}>KLIK</button>
//           </>
//     )
// }