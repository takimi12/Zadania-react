import { SubTodo } from "./3index";

type SingleSubTodoProps = {
    element:SubTodo;
}


export const  SingleSubTodo = ({element}: SingleSubTodoProps) => {
return (
    <li >
        
        <p>{element.title}</p>        
        <button>Delete</button>
        </li>
)
}