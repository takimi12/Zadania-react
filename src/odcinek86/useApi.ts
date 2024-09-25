
const API_URL =  process.env.REACT_APP_API_URL1;

export const useApi = () => {

    const call = async <R, P={}> (url:string, method: 'GET' | 'DELETE' | 'POST' | 'PUT', payload?: P): Promise<R> => {


        const fetchConfig = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload ? JSON.stringify(payload) : undefined
        }

        try{
        const response  =  await fetch(`${API_URL}${url}`, fetchConfig)

            if(response.ok) {
                const data:R = await response.json()
                return data;
            } else {
                const apiError: string = await response.text()
                throw new Error(apiError)
            }
        } catch (e) {
            throw new Error('Wystapil blad1')
        }


    }
    
    const apiGet = async<R>(url:string) => {
        return await call<R>(url, 'GET')
    }
    
    const apiPost = async<R, P>(url:string, payload: P) => {
        return await call<R, P>(url, 'POST', payload)
    }

    const apiPut = async<R,P>(url:string, payload:P) => {
        return await call<R,P>(url, 'PUT', payload)
    }
    const apiDelete = async<R>(url:string) => {
        return await call<R>(url, 'DELETE')
    }

    return {
        apiGet,
        apiPost,
        apiPut,
        apiDelete
    }
  };