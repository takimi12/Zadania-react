import { FormEvent, useState } from 'react';
import { useGetSubTodosQuery } from './useGetSubTodosQuery';
import { useGetTodosQuery } from './useGetTodosQuery';
import { useTodoCreateMutation } from './useTodoCreateMutation';




export const TodosAfterMutation = () => {
    const [value,setValue] = useState('')
    const {mutate:createTodo} = useTodoCreateMutation();
    const {data, refetch} = useGetTodosQuery();

    

    const firstTodoId = data ? data[0].id : undefined;


    const {data:subtodos} = useGetSubTodosQuery(firstTodoId)
 
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        createTodo(value)
    }




   if(!data || !subtodos) return null;

    return (
        <div>
            <form onSubmit={onSubmit}>
<input type="titl" value={value} onChange={e => setValue(e.target.value)} />

            </form>
            <button type="button" onClick={ () => refetch()}>cccc</button>
        <ul>
            {data.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
        <hr />
        <ul>
            {subtodos.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
        </div>
    )
}
