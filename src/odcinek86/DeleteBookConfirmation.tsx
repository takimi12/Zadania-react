import { BookEntity } from "./index"
import { useDeleteBookMutation } from "./useDeleteBookMutation";

type DeleteBookConfirmationProps = {
    book:BookEntity;
    onCancel:() => void;
}

export const DeleteBookConfirmation = ({book, onCancel}: DeleteBookConfirmationProps) => {

    const {mutate, isPending} = useDeleteBookMutation(book.id)

    const handleDelete = () => {
        mutate();
    }

    if(isPending) return <p>Loaoading...</p>

    return (
        <div>
            <p>Do you realy want to delete book <strong>{book.title}</strong></p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}