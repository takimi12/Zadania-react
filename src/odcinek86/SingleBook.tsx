import { useState } from "react";
import { EditBook } from "./EditBook";
import { BookEntity } from "./index";
import { DeleteBookConfirmation } from "./DeleteBookConfirmation";

type SingleBookProps = {
    book: BookEntity;
}

export const SingleBook = ({ book }: SingleBookProps) => {
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');

    const toggleEditMode = () => {
        setMode(prevMode => prevMode === 'edit' ? 'none' : 'edit');
    }

    const toggleDeleteMode = () => {
        setMode(prevMode => prevMode === 'delete' ? 'none' : 'delete');
    }

    return (
        <li>
            <h2><strong>{book.title}</strong> ({book.year})</h2>
            <p>{book.description}</p>
            <button onClick={toggleEditMode}>{mode === 'edit' ? 'Cancel' : 'Edit'}</button>
            {mode === 'edit' && <EditBook book={book} />}
            <button onClick={toggleDeleteMode}>{mode === 'delete' ? 'Cancel' : 'Delete'}</button>
            {mode === 'delete' && <DeleteBookConfirmation onCancel={toggleDeleteMode} book={book} />}
        </li>
    )
}
