import { useEffect, useState } from "react";
import { useApi } from "../exercise1/17useApi";
import { SubTodo, TodoWitthSubTodos } from "./3index";



type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {

    const { apiGet } = useApi();
    const [subtodos, setSubtodos] = useState<SubTodo[]>([]);

    const getSubTodos = async () => {
        const subTodosData = await apiGet<TodoWitthSubTodos>(`todos/${todoId}??_embed=subtodos`);

    if(subTodosData) {
        setSubtodos(subTodosData.subtodos)
    }
}


useEffect(() => {
    getSubTodos();
}, [])


return (
    <ul>
    {subtodos.map(subtodo=> <li key={subtodo.id}>{subtodo.title}</li>)}
</ul>
)
}