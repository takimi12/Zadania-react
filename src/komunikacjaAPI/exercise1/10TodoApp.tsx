
import { SingleTodo } from "./4SingleTodo"
import { useTodos } from "./9useTodos"


export const TodoApp = () => {
    const {data,loading, error}= useTodos();

    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <ul>
            {data?.map(element => <SingleTodo key={element.id} element={element} />)}
        </ul>
    )
}