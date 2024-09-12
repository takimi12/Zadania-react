import React,{useEffect, useState} from 'react'
import { useApi } from './9hookuseApi';


export type Entity = {
    id: string;
    prop1:string;
    prop2:string;
}


export const List = () => {
const {get,data, loading, error} = useApi<Entity[]>();


useEffect(() => {
    get('collection')
}, []);


if(loading) return <p>Loading...</p>

if(error) return <p>{error}</p>

if(!data) return null;

return (
    <ul>
        {data.map(entity => <li key={entity.id}>{entity.prop1} = {entity.prop2}</li>)}
    </ul>
)

}