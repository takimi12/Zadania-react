import { useEffect } from "react";
import { useSubTodoDelete } from "./useSubTodoDelete";
import { SubTodo } from "./index";


type SingleSubTodoProps = {
    onDeleteCallback:() => void;
    element:SubTodo;
}


export const  SingleSubTodo = ({element, onDeleteCallback}: SingleSubTodoProps) => {

    const {deleteSubTodo, data}= useSubTodoDelete()

    const onDelete = () => {
        deleteSubTodo(element.id)
    }

    useEffect(() => {
        if(!data) return
        onDeleteCallback();
    }, [data])
  


return (
    <li >
        
        <p>{element.title}</p>        
        <button onClick={onDelete}>Delete</button>
        </li>
)
}