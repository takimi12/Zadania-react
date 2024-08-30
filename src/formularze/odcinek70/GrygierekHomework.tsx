
import { useForm } from "../hooks/useForm";
import { FormEvent, useState } from "react";
import { Field } from "./Field";
import { Checkbox } from "./Checkbox";



type FormValues = {
    login:string;
    password: string;
    rulesAccepted: boolean;
}

type FormErrors = {
    [key in keyof FormValues]: string[]
}

export const HomeworkG = () => {

    const [form, handleChange] = useForm<FormValues>({
        login:'',
        password:'',
        rulesAccepted: false
    })

    const [errors, setErrors] = useState<FormErrors>({
        login:[],
        password:[],
        rulesAccepted:[]
    })


    const [success, setSuccess] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        let isSucces = true;

        const newErrors: FormErrors = {
            login:[],
            password: [],
            rulesAccepted: []
        }

        if (!login) {
            newErrors.login.push('To pole jest wymagane');
            let isSucces = true;
        } if (login.length < 3) {
            newErrors.login.push('Login musi mieć minimum 3 znaki');
            let isSucces = true;
        }
        
  
        if (!password) {
            newErrors.password.push('Hasło jest wymagane');
            let isSucces = true;
        }
        if (password.length < 3) {
            newErrors.password.push('login musi mieć minimum 3 znaki')
            let isSucces = true;
        }
        const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g)

        if(!regex.test(password)) {
            newErrors.password.push('Hasło musi zawierać małą literę, wielką literę i znak specjalny')
            let isSucces = true;
        }
        if(!rulesAccepted){
            newErrors.rulesAccepted.push('Akceptacja regulaminu jest wymagana')
            let isSucces = true;
        }

        setErrors(newErrors)
        setSuccess(isSucces)
    }


    const {login,password, rulesAccepted} = form

    return (
        <form onSubmit={handleSubmit}>
        {success && <p>Dziękujemy, zostałeś zarejestrowany poprawnie</p>}
            <Field name="login" label="login" type="text" onChange={handleChange} value={login} errors={errors.login} />
            <Field name="password" label="password" type="password" onChange={handleChange} value={password} errors={errors.password} />
            <Checkbox name="rulesAccepted" label="I accept the rules" onChange={handleChange} checked={rulesAccepted} errors={errors.rulesAccepted} />
            <button type="submit">Send</button>
        </form>
    )
}