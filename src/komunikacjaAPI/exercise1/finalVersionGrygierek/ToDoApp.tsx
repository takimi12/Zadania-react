
import { SingleTodo } from "./SingleTodo"
import { useTodos } from "./useTodos"
import { TodoForm } from "./ToDoForm";

export const TodoAppEnd = () => {
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