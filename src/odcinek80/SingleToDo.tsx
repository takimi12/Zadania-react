import { useEffect, useState } from "react"
import {Todo} from "./index"
import { useTodosDelete } from "./useTodoDelete";

type SingleTodoProps = {
    onTodoRemove:(id:string) => void;
    element:Todo;
}


export const SingleTodo = ({element, onTodoRemove}:SingleTodoProps) => {

    
    const {loading, error, deleteTodo,data} = useTodosDelete()

    const onDelete = () => {
        deleteTodo(element.id)
    }

    useEffect(() => {
        if(!data) return

        onTodoRemove(data.id)
    }, [data])

    return (
        <li>
            <p>{element.title}</p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            {error && <p>{error}</p>}
        </li>
    )


}