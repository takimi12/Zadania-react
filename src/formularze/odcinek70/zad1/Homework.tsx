import {  useState } from "react";


export const HomeworkForm = () => {
    const [login, setLogin] = useState('')
    const [loginValidation, setLoginValidation] = useState('')
    const [password, setPassword] = useState('')
    const [passwordValidation, setPasswordValidation] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [checkboxValidation, setCheckboxValidation] = useState('')
    const [Lastinfo, setLastInfo] = useState('')

    

    

    const validate = () => {
        let isValid = true;

        if (login.length < 3) {
            setLoginValidation('Pole login powinno mieć 3 znaki');
            isValid = false;
        } else {
            setLoginValidation('');
         }



         const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g)

         if (password.length < 3) {
            setPasswordValidation('Pole hasło powinno mieć co najmniej 3 znaki');
            isValid = false;
        }
         else if(!regex.test(password)) {
             setPasswordValidation('Hasło musi zawierać małą literę, wielką literę i znak specjalny')
             isValid = false;
         }    else {
            setPasswordValidation('')
         }    
        if (!checkbox) {
            setCheckboxValidation('To pole musi być zaznaczone');
            isValid = false;
        } else {
            setCheckboxValidation('');
        }

        if (isValid) {
            setLastInfo('Dziękujemy zostałeś poprawnie zarejestrowany');
        } else {
            setLastInfo('');
        }
        return isValid;
    };







    const handleSendForm =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if( validate()){
            setLogin('')
            setPassword('')
            setCheckbox(false)
        }
         

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
    <input id="name" name="name" type="text" value={login} onChange={handleInputChange}   />
    </label>
    <p>{loginValidation}</p>
    <label htmlFor="password">
    <input id="password" name="password" value={password} type="text" onChange={handlePasswordChange}   />
    </label>
    <p>{passwordValidation}</p>
    <label htmlFor="checkbox">
    <input id="checkbox" name="checkbox"  checked={checkbox} type="checkbox" onChange={handleCheckboxChange}   />
    </label>
    <p>{checkboxValidation}</p>
    <p>{Lastinfo}</p>
    <button type="submit">Wyslij formularz</button>
    </form>

</>
)
};


