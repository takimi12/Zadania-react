import { useEffect, useState } from "react"
import { useApiEx80 } from "./useApi";
import { Todo, TodoDto } from ".";

const API_BASE = 'http://localhost:3000/'

type Data = {
    id:string;
    title:string;
}

export const  MyVersionwitHook = () => {



    const [text, setText ] = useState('');
    const [data, setData] = useState<Todo[] | undefined>(undefined); // Typ Todo[] lub undefined
    const {apiGet,error, loading,apiDelete, apiPost} = useApiEx80()
 

  
    


    const createTodo = async (title:string) => {
        const response = await apiPost<Todo, TodoDto>(`todos`, {title});
        if(response) {
            setData(response)
        }
    }

    const textChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    

    const deleteTodo = async (id:string) => {
        const response = await apiDelete(`todos/${id}`);
        if(response) {
            setData(response)
            GetTodo('todos');
        }
    }


    const GetTodo = async (id:string) => {
        const response = await apiGet(`todos`);
        if (response) {
            setData(response);
        } else {
            setData(undefined);  
        }
    }




//    const post = async () => {
//     try {
//         const response = await fetch(`${API_BASE}todos`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ title: text }) 
//         });

//     } catch (error) {
//         setError('Wystąpił błąd podczas wysyłania danych');
//     }
//    }




    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createTodo
        setText('');

    };
    



    useEffect(() => {
        GetTodo('todos')
        }, [])


    return (
        <>
        {Array.isArray(data) ? (
         data.map(el => (
             <>
                 <li key={el.id}>{el.title}</li>
                 <button type="button" onClick={() => deleteTodo(el.id)}>Usuń element</button>
             </>
         ))
     ) : (
         <p>Brak danych do wyświetlenia</p>
     )}
        <div style={{marginTop:'100px'}}></div>
        <div>
            <p>Dodaj element do listy</p>

            
            <form >
  <input type="text" value={text} onChange={(e) => textChnage(e)} />  
  <button type="submit" > Wyslij dane</button> 
</form>
            </div>
        </>
     );
  }
  
