import { useEffect, useMemo, useState } from "react";

type direction = {
    direction: 'DESC' | 'ASC';
}


export const WrapperHomeworkContent =({direction}:direction) => {

    const [randomLenght, setradnomLength] = useState(0)



    const getArray = (dir: 'DESC' | 'ASC', len:number) => {

        const result:number [] = []

        for(let i = 0; i < len; i++){
            result.push(Math.round(Math.random() * 100))
        }

        result.sort((a,b) => dir === 'ASC' ? a - b : b - a)

        return result
    }

        useEffect(() => {
            const interval = setInterval(() => {
                setradnomLength(Math.round(Math.random() * 15) + 5)
            }, 5000)

        return () => {
            clearInterval(interval)
        }
    })

    const elements = getArray(direction, randomLenght)

    return (
        <ul>
            {elements.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    )
    }