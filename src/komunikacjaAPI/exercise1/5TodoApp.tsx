import { useEffect } from "react"
import { useApi } from "./hooks/useApi"
import {Todo} from "./types"
import { SingleTodo } from "./4SingleTodo"

export const TodoApp = () => {

    const {data,error, loading, get } = useApi<Todo[]>()

    useEffect(() => {
        get('todos');
    }, [])


    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <ul>
            {data?.map(element => <SingleTodo key={element.id} element={element} />)}
        </ul>
    )
}