import { useEffect, useState } from "react";
import { useApi } from "../exercise1/8useApi";
import { SubTodo, TodoWitthSubTodos } from "./3index";

export const useSuBTodos = (todoId:string) => {
    const {error, loading, apiGet } = useApi()
    const [data, setData]  = useState<SubTodo[]>()

    const getSubTodos = async () => {
        const response = await apiGet<TodoWitthSubTodos>(`todos/${todoId}?_embed=subtodos`);
        if(response) {
            setData(response.subtodos)
        }
    }
    useEffect(() => {
        getSubTodos()
    }, [])

    return {
        data,error, loading
    }
}