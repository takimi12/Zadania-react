import { FormEvent, useState } from 'react';
import { useGetSubTodosQuery } from '../tanstackQuery2/useGetSubTodosQuery';
import { useGetTodosQuery } from '../tanstackQuery2/useGetTodosQuery';
import { useTodoCreate } from '../tanstackQuery2/useTodoCreate';





export const Ex2tanstackquery = () => {
    const [value, setValue] = useState('');
    const {createTodo} = useTodoCreate();
    const {data, refetch,} = useGetTodosQuery();



    const firstTodoId = data ? data[data.length -1].id : undefined;

    const {data:subtodos} = useGetSubTodosQuery(firstTodoId);


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        createTodo(value)
    }


    if(!data || !subtodos) return null;
 
    return (
<>
    <button onClick={ () => refetch()}>Refetch todos</button>
    <div>
        <form onSubmit={onSubmit}>
            <input type="title" value={value} onChange={e => setValue(e.target.value)} />
        </form>

        <ul>
            {data.map(element => <li key={element.id}>{element.title}</li>)}
        </ul>
        <hr ></hr>
        <ul>
            {subtodos.map(element => <li key={element.id}> {element.title}</li>)}
        </ul>
  
        </div>
 </>
    )
}
