import {  useState } from "react";

//1. Odczyt danych z input type text + zapisanie tego do usestate
//2.

export const HomeworkForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const validadeForm = () => {
        if(login.length < 3) {
            return 'Wymagane min. 3 znaki'
        } else  if (password.length < 3) {
            return 'Wymagane min. 3 znaki'
        } else if ( !checkbox) {
            return 'Wymagane zaznaczenie chceckboxa'
        }
    }

    const handleSendForm =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        validadeForm();
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        setCheckbox(e.target.checked)
    }



return (
    <>
    <form onSubmit={handleSendForm} >
    
    <label htmlFor="name">
    <input id="name" name="name" type="text" onChange={handleInputChange}   />
    </label>
    <label htmlFor="password">
    <input id="password" name="password" type="text" onChange={handlePasswordChange}   />
    </label>
    <label htmlFor="checkbox">
    <input id="checkbox" name="checkbox" type="text" onChange={handleCheckboxChange}   />
    </label>

    <button type="submit">Wyslij formularz</button>
    </form>

</>
)
};