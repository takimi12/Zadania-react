import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

export const ProductsDetails = () => {

    const navigate = useNavigate();

    const disable = true;

    useEffect(() => {
        setTimeout(() => {
            navigate('..', {
                relative: 'path'
            })
        },1000)
    },[])

    // if(disable) return <Navigate relative="path" to=".." />
    return (
        <>
        <h1>Product: id 23232</h1>
      
        </>
    )
}