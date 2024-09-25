import {useMultipleTodos} from "./useMultipleTodos"
export const MultipleTodos = () => {

 const {data} =    useMultipleTodos();

    return (
        <ul>
            {data.map(el => <li>{el?.title}</li>)}
        </ul>
    )
}