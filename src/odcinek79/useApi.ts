import { useState } from "react"

const API_BASE = 'http://localhost:3000/';


export const useApi = <T>() => {
    const [data, seetData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState('')

    const get = async (url:string) => {
        try{
    const response = await fetch(`${API_BASE}${url}`);
    if(response.ok) {   
   const data: T = await response.json()
   seetData(data) 
    } else {
    const apiError:string = await response.text();
    setError(apiError)
    }    
        } catch(e) {
            setError('Wystąpił błąd')
        } finally {
            setLoading(false)
        }

}

return {
    get, data, loading, error
}
}