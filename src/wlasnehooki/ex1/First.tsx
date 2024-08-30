import { UseCounter } from "./useCounter";



export const UseCounter1 = () => {

    const counter = UseCounter(10, 1000)

return (
    <h1>{counter}</h1>
)
    
};
