import { useMultipleTodos1 } from "./useMultiplesTodos";

export const MultipleTodos = () => {

    const {data} =   useMultipleTodos1()


    return <ul>
        {data.map(el=> <li key={el?.id}>{el?.title}</li>)}
    </ul>;
}