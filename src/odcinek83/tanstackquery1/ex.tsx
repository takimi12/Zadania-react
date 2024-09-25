import { useQuery } from "@tanstack/react-query";


type Todo = {
    id:string;
    title:string;
}

export const TodosEx1 = () => {

 const {data} =    useQuery({
        queryKey: ['todosik'],
        queryFn: async () => {
                const response = await fetch('http://localhost:3000/todos');
                return response.json() as Promise<Todo[]>
        }
    })


    if(!data) return null
    
    return (
        <ul>
            <li>
        {data.map(element => <li key={element.id}> {element.title}</li>)}
            </li>
        </ul>
    )
}