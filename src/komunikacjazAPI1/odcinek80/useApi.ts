import { useState } from "react"
import { Todo } from "./index"

const API_BASE = 'http://localhost:3000/'



export const useApiEx80 = () => {

    const [data, setData] = useState<Todo[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState('')
    const [text, setText ] = useState('');


    const textChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }



    const call = async (url: string, method: 'GET' | 'DELETE') => {
        try{
            const response = await fetch(`${API_BASE}${url}`, {method});
            if(response.ok){
            const data: Todo[] = await response.json()
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
        


    const apiDelete = async (url:string) => {
       return  await  call(url, 'DELETE')
    }

    const apiGet = async (url:string) => {
      return  await  call(url, 'GET')
    }


return {
    error, loading,data, setError,  text ,textChnage, apiDelete, apiGet
}


}