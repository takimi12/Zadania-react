import { useEffect, useState } from "react"
import { Todo } from "./index"
import { useTodosDelete } from "./useTodoDelete";
import { SubTodos } from "./SubTodos";


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