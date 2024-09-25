import { useQuery } from "@tanstack/react-query"
import { useApi } from "./useApi";

type Todo = {
    id:string;
    title: string;
}

export const useGetTodosQuery = () => {
    const {apiGet} = useApi()

    const {data, refetch} =    useQuery({
        queryKey:['todos'],
        queryFn: async () => {
            return apiGet<Todo>('todos')
        }
    })

    return {
        data,
        refetch
    }
}