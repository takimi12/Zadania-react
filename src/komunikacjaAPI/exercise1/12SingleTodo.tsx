import { useTodosDelete } from "./11useTodoDelete"
import { Todo } from "./types"

type SingleTodoProps = {
    element: Todo
}


export const SingleTodo = ({element}: SingleTodoProps) => {

    const {loading, error, deleteTodo,data} = useTodosDelete()


    const onDelete =() => {
        deleteTodo(element.id)
    }

    return (
        <li>
            <p>{element.title}</p>
            <button disabled={loading} onClick={onDelete}>Delete</button>
            {error && <p>{error}</p>}
        </li>
    )
}