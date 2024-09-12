import { useEffect } from "react";
import { SubTodo } from "./3index";
import { useSubTodoDelete } from "./7useSubTodoDelete";

type SingleSubTodoProps = {
    onDeleteCallback:() => void;
    element:SubTodo;
}


export const  SingleSubTodo = ({element, onDeleteCallback}: SingleSubTodoProps) => {

    const {deleteSubTodo}= useSubTodoDelete()

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