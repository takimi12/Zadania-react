import { useEffect, useState } from "react";
import { useApi } from "./useApi";

export type Entity = {
    id:string;
    prop1:string;
    prop2:number;
}



export const  Odcinek1 = () => {
    const [entities, setEntities] = useState<Entity[]>([])
    const {get, loading,data, error}= useApi();

   

    useEffect(() => {
        get('collection1');
    }, [])


    if(loading) return <p>Loading...</p>
    if(error) return <p>Loading...</p>
    if(!data) return <p>Wystąpił błąd..</p>

    return (
        <ul>
            {entities.map(entity => <li key={entity.id}>{entity.prop1} - {entity.prop2}</li>)}
        </ul>
  
     );
  }
  
