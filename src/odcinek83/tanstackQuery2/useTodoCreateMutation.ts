import { useMutation } from "@tanstack/react-query";

export const useTodoCreateMutation = () => {
    
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

        },
        
    })
    return {
        mutate
    }
}