import { useMutation, useQueryClient } from "@tanstack/react-query";
import {useApi} from "./useApi"
import { BookDto, BookEntity } from "./index";

export const useDeleteBookMutation = (bookId:string) => {
    const {apiDelete} = useApi();
    const queryClient = useQueryClient()


    const {mutate, isPending} = useMutation({
        mutationKey: ['books', 'delete',bookId],
        mutationFn: async() =>{
            return apiDelete<BookEntity>(`books/${bookId}`, )
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