import { FormEvent, useState } from "react";
import { useGetSubTodosQuery } from "./useGetSubTodosQuery";
import { useGetTodosQuery } from "./useGetTodosQuery";
import {useTodoCreate} from "./useTodoCreate"

export const Todos = () => {
    const [value, setValue] = useState('')
    const {createTodo} = useTodoCreate()

    const {data, refetch} = useGetTodosQuery()

    const firstTodoId = data ? data[data.length - 1].id : undefined;

    const {data:subtodos} = useGetSubTodosQuery(firstTodoId);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        createTodo(value);
    }


    if(!data || !subtodos ) return null;

    return (
         <div>
            <form onSubmit={onSubmit}>
                <input type="tlte" value={value} onChange={e => setValue(e.target.value)} />
            </form>
            <button type="submit" onClick={() => refetch()}>refetch</button>
        <ul>
        {data.map(element => 
            <li key={element.id}>{element.title}</li>
        )}
    </ul>
    <ul>
        {subtodos.map(element => <li key={element.id}>  {element.title}</li>)}
    </ul>
    </div>
    )
}