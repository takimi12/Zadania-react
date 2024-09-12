import { useState } from "react"

const API_BASE = 'http://localhost:3000/'

export const useApi = <T>() => {
    const [data,setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState('')


    const apiGet = async (url:string, ) => {
        try {
        const response = await fetch(`${API_BASE}${url}`);
            
        if(response.ok) {
            const data: T = await response.json()
            setData(data)
        } else {
            const apiError:string = await response.text();
            setError(apiError)
        }
        } catch (e) {
            setError('wystąpił błąd')
        } finally {
        setLoading(false)
        }
}



const apiDelete = async (url:string) => {
    try {
    const response = await fetch(`${API_BASE}${url}`, {method: 'DELETE'});
        
    if(response.ok) {
        const data: T = await response.json()
        setData(data)
    } else {
        const apiError:string = await response.text();
        setError(apiError)
    }
    } catch (e) {
        setError('wystąpił błąd')
    } finally {
    setLoading(false)
    }
}


return {
   apiGet, apiDelete, data, loading, error
}
}