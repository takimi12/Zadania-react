import { useEffect, useState } from "react";
import { useApi } from "../exercise1/17useApi";
import { SubTodo,SubTodoDto } from "./17index";

export const useSubTodoCreate = () => {
    const {error, loading, apiPost } = useApi()
    const [data, setData]  = useState<SubTodo>()

    const createSubTodo = async (title:string, todoId:string) => {
        const response = await apiPost<SubTodo,SubTodoDto>(`todos`, {title, todoId});
        if(response) {
            setData(response)
        }
    }
  
    return {
        data,error, loading, createSubTodo
    }
}