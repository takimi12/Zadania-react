import React from "react";
import {useLoaderData} from "react-router-dom"
import {SinglePokemon} from "./pokemon"

export const Pokemon = () => {
    
    const pokemon = useLoaderData() as SinglePokemon ;

    const {id,weight, height, name} = pokemon;

    return (
        <div>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
        </div>
    )
}