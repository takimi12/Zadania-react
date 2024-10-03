import { Params, json } from "react-router-dom"
import { PokemonError } from "./pokemon";

export const pokemonLoader = async ({params}: {params : Params<'name'>}) => {
    const {name} = params;

const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)

    if(response.status === 404) {
        throw json({
            message: `This ${name} pokemon does not exist`
        } as PokemonError,
        {
            status:404
        })
    }

    return response.json();
}