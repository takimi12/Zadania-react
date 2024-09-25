import { useSubTodos } from "./useSubTodos";
import { SingleSubTodo } from "./SingleSubTodo";
import { SubTodoForm } from "./SubTodoForm";


type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {
    const {data, error, loading, getSubTodos } = useSubTodos(todoId)


if(error) return <p>{error}</p>

if(loading) return <p>Loading subtodos...</p>

if(!data) return null





return (
    <>
    <SubTodoForm todoId={todoId} onNewSubTodoCallback={getSubTodos}/>
      <ul>
    {data.map(subtodo=> <SingleSubTodo key={subtodo.id} element={subtodo} onDeleteCallback={getSubTodos}></SingleSubTodo>)}
</ul>
</>
)
}