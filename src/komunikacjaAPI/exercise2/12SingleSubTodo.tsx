import { SubTodo } from "./3index";
import { useSubTodoDelete } from "./7useSubTodoDelete";

type SingleSubTodoProps = {
    element:SubTodo;
}


export const  SingleSubTodo = ({element}: SingleSubTodoProps) => {

    const {deleteSubTodo}= useSubTodoDelete()

    const onDelete = () => {
        deleteSubTodo(element.id)

    }

return (
    <li >
        
        <p>{element.title}</p>        
        <button onClick={onDelete}>Delete</button>
        </li>
)
}