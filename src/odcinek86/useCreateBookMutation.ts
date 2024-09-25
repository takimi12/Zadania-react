import { useMutation, useQueryClient } from "@tanstack/react-query";
import {useApi} from "./useApi"
import { BookDto, BookEntity } from ".";

export const useCreateBookMutation = () => {
    const {apiPost} = useApi();
    const queryClient = useQueryClient();


    const {mutate, isPending} = useMutation({
        mutationKey: ['books', 'create'],
        mutationFn: async(payload:BookDto) =>{
            return apiPost<BookEntity, BookDto>('books',payload )
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['books']
            })
        }
    })

    return {
        mutate,
        isPending
    }

}