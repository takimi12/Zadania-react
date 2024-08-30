import {useEffect, useRef} from "react"


type Props = {
    value: number;
}

export const CounterLet =({value}:Props) => {
    let counter = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            counter++;
            console.log(counter)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    console.log(counter)

    return <h1> {value} | {counter}</h1>

}