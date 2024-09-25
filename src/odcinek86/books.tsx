import { AddBook } from "./AddBook";
import { SingleBook } from "./SingleBook";
import { useGetBooksQuery } from "./useGetBooksQuery"


export const Books86 = () => {
const {data, isFetching } = useGetBooksQuery();



if(isFetching) return <p>loading....</p>
if(!data) return null
    return (
        <ul>
            <h1>Books</h1>
            <AddBook />
            <li>
        {data.map((book) => <SingleBook book={book} key={book.id} />)}
            </li>
        </ul>
    )
}