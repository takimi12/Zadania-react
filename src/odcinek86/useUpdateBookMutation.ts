import { useMutation, useQueryClient } from "@tanstack/react-query";
import {useApi} from "./useApi"
import { BookDto, BookEntity } from "./index";

export const useUpdateBookMutation = (bookId:string) => {
    const {apiPut} = useApi();
    const queryClient = useQueryClient()


    const {mutate, isPending} = useMutation({
        mutationKey: ['books', 'update',bookId],
        mutationFn: async(payload:BookDto) =>{
            return apiPut<BookEntity, BookDto>(`books/${bookId}`,payload )
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