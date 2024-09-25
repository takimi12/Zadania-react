import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { SubTodo } from "./index"

export const useSubTodoDelete  = () => {
    const {error,loading, apiDelete} = useApi();
    const [data, setData] = useState<SubTodo>()

    const deleteSubTodo = async (id:string) => {
        const response = await apiDelete<SubTodo>(`subtodos/${id}`);
        if(response) setData(response)
    }

    
    return {
        data, error, loading, deleteSubTodo
    }
}