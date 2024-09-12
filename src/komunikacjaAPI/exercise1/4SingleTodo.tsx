import { Todo } from "./types"

type SingleTodoProps = {
    element: Todo
}


export const SingleTodo = ({element}: SingleTodoProps) => {

    const onDelete = () => {
        
    }


    return (
        <li>
            <p>{element.title}</p>
            <button>Delete</button>
        </li>
    )
}