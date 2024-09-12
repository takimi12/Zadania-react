import { useEffect, useState } from "react"
import { useApi } from "./8useApi"
import {Todo} from "./types"
import { SingleTodo } from "./4SingleTodo"


export const TodoApp = () => {

    const {error, loading, apiGet } = useApi()
    const [data, setData]  = useState<Todo[]>()

    const getTodos = async () => {
        const response = await apiGet<Todo[]>('todos');
        if(response) {
            setData(response)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])


    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <ul>
            {data?.map(element => <SingleTodo key={element.id} element={element} />)}
        </ul>
    )
}