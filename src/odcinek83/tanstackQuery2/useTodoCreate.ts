import { useEffect, useState } from "react";
import { useApi } from "../../komunikacjaAPI/exercise1/17useApi"
import { Todo } from "../../komunikacjaAPI/exercise1/types";
import { TodoDto } from "../../komunikacjaAPI/exercise1/19index";

export const useTodoCreate = () => {
    const {error, loading, apiPost } = useApi()
    const [data, setData]  = useState<Todo>()

    const createTodo = async (title:string) => {
        const response = await apiPost<Todo,TodoDto>(`todos`, {title});
        if(response) {
            setData(response)
        }
    }
  
    return {
        data,error, loading, createTodo
    }
}