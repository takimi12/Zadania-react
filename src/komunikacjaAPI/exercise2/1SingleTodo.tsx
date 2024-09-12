import { useEffect, useState } from "react";
import { useTodosDelete } from "../exercise1/11useTodoDelete"
import { Todo } from "../exercise1/types"
import { useApi } from "../exercise1/17useApi";
import { SubTodo, TodoWitthSubTodos } from "./3index";
import { SubTodos } from "./4SubTodos";

type SingleTodoProps = {
    onTodoRemove: (id:string) => void;
    element: Todo
}


export const SingleTodo = ({element, onTodoRemove}: SingleTodoProps) => {

    const {loading, error, deleteTodo,data} = useTodosDelete()
    const [showTodos, setShowTodos] = useState(false)

    const onDelete =() => {
        deleteTodo(element.id)
    }

    const toggleSubTodos = () => {
        setShowTodos(prevShowTodos => !prevShowTodos);
    }


useEffect(() =>{
    if(!data) return


    onTodoRemove(data.id)
}, [data])



    return (
        <li>
            <p>{element.title}</p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            <button disabled={loading} onClick={toggleSubTodos }>Show details</button>
            <ul>
                {showTodos && <SubTodos todoId={element.id} />}
            </ul>
            {error && <p>{error}</p>}
        </li>
    )
}