import { useEffect, useState } from "react"

const API_BASE = 'http://localhost:3000/'

type Data = {
    id:string;
    title:string;
}

export const  CwiczenieKomunikacja = () => {

    const [data, setData] = useState<Data[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState('')

    const [text, setText ] = useState('');



    const textChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
     

    const get = async (url: string) => {
        try{
            const response = await fetch(`${API_BASE}${url}`);

            if(response.ok){
        const data: Data[] = await response.json()
        setData(data)
            } else {
                const apiError:string = await response.text();
                setError(apiError)
            }
        } catch(e) {
            setError('wystapil blad')
        } 
        setLoading(false)
    }

   const post = async () => {
    try {
        const response = await fetch(`${API_BASE}todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: text }) 
        });

    } catch (error) {
        setError('Wystąpił błąd podczas wysyłania danych');
    }
   }


    const onDelete = async (id: string) => {
        try {
            const response = await fetch(`${API_BASE}todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setData(prevData => prevData.filter(item => item.id !== id));
            } else {
                setError('Wystąpił błąd podczas usuwania elementu');
            }
        } catch (error) {
            setError('Wystąpił błąd podczas usuwania elementu');
        }
    };


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
      post()
    
    };
    



    useEffect(() => {
        get('todos')
        }, [])


    return (
        <>
        {data.map(el => 
        <>
        <li key={el.id}>{el.title} </li>
        <button type="button" onClick={(e)=>onDelete(el.id)}>Usuń element</button>
            </>
        )}
        <div style={{marginTop:'100px'}}></div>
        <div>
            <p>Dodaj element do listy</p>

            
            <form onSubmit={submitForm}>
  <input type="text" value={text} onChange={(e) => textChnage(e)} />  
  <button type="submit" > Wyslij dane</button> 
</form>
            </div>
        </>
     );
  }
  
