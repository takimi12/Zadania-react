import { useQuery } from "@tanstack/react-query"
import { BookEntity } from "./index";
import { useApi } from "./useApi";


export const useGetBooksQuery = () => {
    const {apiGet} = useApi()
const {data, isFetching}  =   useQuery<BookEntity[]>({
        queryKey: ['books'],
        queryFn: async() => {
            return apiGet<BookEntity[]>('books')
        }
    })
    return {data, isFetching}
}