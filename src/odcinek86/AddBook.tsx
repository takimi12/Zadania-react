import { ChangeEvent, FormEvent, useState } from "react"
import { useCreateBookMutation } from "./useCreateBookMutation"
import { BookForm } from "./BookForm";

export const AddBook = () => {
    const {mutate,isPending} = useCreateBookMutation();


    const [values, setValues] = useState({
        title: '',
        description: '',
        year: 2024
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


        setValues({
            title:'',
            description:'',
            year:2024
        })
    }
 

    return (
       <BookForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} isPending={isPending} />
    )
}