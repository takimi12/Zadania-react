import { FormEvent, useEffect, useState } from "react"
import { useTodoCreate } from "../odcinek83/tanstackQuery2/useTodoCreate"
import {Todo} from "./index"


type TodoFormProps = {
    onNewTodo: (todo: Todo) => void
}

export const TodoForm = ({onNewTodo}: TodoFormProps) => {
    const {createTodo, error, loading,data} = useTodoCreate()
    const [value, setValue] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        createTodo(value)
        setValue('')
    }

    useEffect(() => {
        if(!data) return
        
        onNewTodo(data)
    }, [data])



    if(loading) return <p>Loading...</p>

    return (
        <>
        <form >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={value} onChange={e=> setValue(e.target.value)} />
            {error && <p>{error}</p>}
        </form>
        </>
    )
}