
import { SingleTodo } from "./16SingleTodo"
import { useTodos } from "./14useTodos"


export const TodoApp = () => {
    const {data,loading, error,removeTodo}= useTodos();

    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <ul>
            {data?.map(element => <SingleTodo key={element.id} onTodoRemove={removeTodo} element={element}  />)}
        </ul>
    )
}