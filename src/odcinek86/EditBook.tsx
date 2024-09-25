import { ChangeEvent, FormEvent, useState } from "react";
import { BookEntity } from "./index";
import { BookForm } from "./BookForm";
import { useUpdateBookMutation } from "./useUpdateBookMutation";


type EditBookProps ={ 
    book: BookEntity;
}


export const EditBook = ({book}:EditBookProps )=> {

    const {mutate, isPending} = useUpdateBookMutation(book.id)
    const [values, setValues] = useState({
        title: book.title,
        description: book.description,
        year: book.year
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} =  e.target
 
        setValues( prevValues => ({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value
        }))
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        mutate({
            title:values.title,
            description: values.description,
            year:values.year
        })


      
    }
 

    return (
       <BookForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
    )
}