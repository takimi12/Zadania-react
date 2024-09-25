import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../odcinek80";

export const useTodoCreateMutation = () => {
 const queryClinet = useQueryClient();   

const {mutate} =     useMutation({
        mutationKey: ['todos'],
        mutationFn: async(title:string) => {
            const res = await fetch('http://localhost:3000/todos/' , {
                headers:{
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    title
                })
            })
            return res.json()
        },
        onSuccess:() => {
            // queryClinet.invalidateQueries({
            //     queryKey: ['todos']
            // })
            queryClinet.setQueryData<Todo[]>(['todos'], oldData =>{
                return [...(oldData || []), data]
            } )
        },
        
    })
    return {
        mutate
    }
}