import { useGetBooksQuery } from "./useGetBooksQuery"

export const BookStat =() => {
    const {data, isFetching} = useGetBooksQuery();

    if(isFetching) return <p>Loading book stats...</p>

     return (
        <div>
            Books count: <strong>{data?.length || 'Np data'}</strong>
        </div>
    )
}