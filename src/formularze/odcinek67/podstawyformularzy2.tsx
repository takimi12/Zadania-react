import { ChangeEvent,FormEvent, useState } from "react";

type FormData = {
  login: {value:string}
}


export const Form = () => {
    const [formState, setFormState] = useState({
        login:'',
        age: '',
        bio:'',
        gender: '',
        agreement: false,
        contact: ''
    })
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState('')
  const [agreement, setAgreeemnt] = useState(false)
  const [contact, setContact] = useState('')

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log((e.target as any).login.value);
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prevState => ({
        ...prevState,
        [e.target.name] : e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    }))
}


return (
  <form onSubmit={handleSubmit}>
    <div>
    <input type="text" name="login" value={login} onChange={handleChange} />
  {!login && <p>Login jest wymagany!</p>}
  {login.length <3 && <p>Login musi mieć minimum 3 znaki!</p>}
  </div>
  <div>
  <input type="number" name="age" value={age} onChange={handleChange} />
  </div>
  <div>
    <textarea value={bio} name="bio" onChange={handleChange} />
  </div>
  <div>
    <select value={gender} onChange={handleChange}>
      <option value="f">kobieta</option>
      <option value="m">Męzczyzna</option>
      <option value="o">Inna</option>
    </select>
  </div>
  <div>
    <input type="checkbox" checked={agreement} onChange={handleChange} />
    Agreement
  </div>
  <div>
    <div>
      <input type="radio" name="contact" value="email" checked={contact === 'email'} onChange={handleChange} />
      Contact by Email
      </div>
      <div>
      <input type="radio" name="contact" value="sms" checked={contact === 'sms'} onChange={handleChange} />
      Contact by Sms
      </div>
      <div>
      <input type="radio" name="contact" value="none" checked={contact === 'none'} onChange={handleChange} />
      No Contact
      </div>
    </div>
    <button type="submit">Save</button>
   

  </form>
)



};