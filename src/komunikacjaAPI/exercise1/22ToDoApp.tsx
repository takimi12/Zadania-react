
import { SingleTodo } from "./16SingleTodo"
import { useTodos } from "./21useTodos"
import { TodoForm } from "./20TodoForm";

export const TodoApp = () => {
    const {data,loading, error,removeTodo, addTodo}= useTodos();

    if(loading) return <p>Loading....</p>

    if(error ) return <p>{error}</p>

    return (
        <div>
        <TodoForm onNewTodo={addTodo} />
        <ul>
            {data?.map(element => <SingleTodo key={element.id} onTodoRemove={removeTodo} element={element}  />)}
        </ul>
        </div>
    )
}