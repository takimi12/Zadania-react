import { useEffect } from "react"
import { useApi } from "./hooks/useApi"
import {Todo} from "./types"

export const TodoApp = () => {

    const {data,error, loading, get } = useApi<Todo[]>()

    useEffect(() => {
        get('todos');
    }, [])


    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <ul>
            {data?.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
    )
}