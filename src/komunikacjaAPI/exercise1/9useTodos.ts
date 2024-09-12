import { useEffect, useState } from "react";
import { useApi } from "./8useApi";
import { Todo } from "./types";

export const useTodos = () => {
    const {error, loading, apiGet } = useApi()
    const [data, setData]  = useState<Todo[]>()

    const getTodos = async () => {
        const response = await apiGet<Todo[]>('todos');
        if(response) {
            setData(response)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])

    return {
        data,error, loading
    }
}