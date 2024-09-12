import { FormEvent, useEffect, useState } from "react"
import {useTodoCreate} from "./useToDoCreate"
import { Todo } from "./index"


type TodoFormProps = {
    onNewTodo : (todo:Todo) => void
}

export const TodoForm = ({onNewTodo}: TodoFormProps) =>{
    const {createTodo, error, loading,data} = useTodoCreate();
    const [value, setValue] = useState('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        createTodo(value)
        setValue('');
    }

    useEffect(() => {
        if(!data) return
        onNewTodo(data)
    },[data])




    if(loading) return <p>Loading...</p>


    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor="title">Title</label> 
           <input 
  type="text" 
  id="title" 
  name="title" 
  value={value} 
  onChange={e => setValue(e.target.value)} 
  onKeyDown={e => e.key === 'Enter' && e.preventDefault()} 
/>
           <button type="submit">Wyslij</button>
           {error && <p>{error}</p>}
        </form>
    )
}