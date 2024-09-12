import { SingleSubTodo } from "./15SingleSubTodo";
import { useSuBTodos } from "./13useSubTodos";



type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {
    const {data, error, loading, getSubTodos } = useSuBTodos(todoId)


if(error) return <p>{error}</p>

if(loading) return <p>Loading subtodos...</p>

if(!data) return null





return (
    <ul>
    {data.map(subtodo=> <SingleSubTodo key={subtodo.id} element={subtodo} onDeleteCallback={getSubTodos}></SingleSubTodo>)}
</ul>
)
}