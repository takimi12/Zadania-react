import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { Todo } from "./index";

export const useTodos  = () => {
    const {error,loading, apiGet} = useApi();
    const [data, setData] = useState<Todo[]>()

    const getTodos = async () => {
        const response = await apiGet<Todo[]>('todos');
        if(response) setData(response)
    }

    const removeTodo = (id:string) => {
        setData(prevTodos => prevTodos?.filter(todo => todo.id !== id))
    }

    const addTodo = (todo: Todo) => {
        setData(prevTodos => [...(prevTodos || []), todo])
    }

    useEffect(() => {
        getTodos()
    }, [])
    
    return {
        data, error, loading, removeTodo, addTodo
    }
}