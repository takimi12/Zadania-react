import { SingleSubTodo } from "./10.SingleSubTodo";
import { useSuBTodos } from "./5useSubTodos";



type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {
    const {data, error, loading} = useSuBTodos(todoId)


if(error) return <p>{error}</p>

if(loading) return <p>Loading subtodos...</p>

if(!data) return null





return (
    <ul>
    {data.map(subtodo=> <SingleSubTodo key={subtodo.id} element={subtodo}></SingleSubTodo>)}
</ul>
)
}