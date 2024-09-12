import { useSuBTodos } from "./5useSubTodos";



type SubTodospROPS = {
    todoId:string;
}

export const SubTodos = ({todoId}: SubTodospROPS) => {
    const {data, error, loading} = useSuBTodos(todoId)



if(!data) return null

if(loading) return <p>Loading subtodos...</p>

if(error) return <p>{error}</p>

return (
    <ul>
    {data.map(subtodo=> <li key={subtodo.id}>{subtodo.title}</li>)}
</ul>
)
}