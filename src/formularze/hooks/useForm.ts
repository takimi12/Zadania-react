import { ChangeEvent, useState } from "react"
import {FormChangeEvent } from "../odcinek70/index"


type UseFormReturn<T> = [T, (e: FormChangeEvent ) => void]

const isCheckboxElement = (target: FormChangeEvent['target']): target is HTMLInputElement => {
return target.type === 'checkbox' && target instanceof HTMLInputElement;
}

export const useForm = <T>(initialValues: T ): UseFormReturn<T> => {
    const [formState, setFormState] = useState<T>( initialValues)

    const getValue = (target: FormChangeEvent['target']) => {
        if(isCheckboxElement(target)){
            return target.checked;
        }
        if(target.type === 'number') return Number(target.value )
        return target.value
    }

    const handleChange = (e:FormChangeEvent) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: getValue(e.target)
        }))
      }

return [formState, handleChange]

}