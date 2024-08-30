import React, { useEffect, useState } from "react";

type Pokemon = {
    name: string;
    abilities: {
        ability: {
            name: string;
        };
    }[];
};

type Props = {
    name: string;
};

const PokemonInfo: React.FC<Props> = ({ name }) => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

    const getPokemon = async (pokemonName: string) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data: Pokemon = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    useEffect(() => {
        if (name) {
            getPokemon(name);
        }
    }, [name]);

    return (
        <>
            <h1>{pokemon?.name}</h1>
            <h2>Umiejętności</h2>
            <ul>
                {pokemon?.abilities.map(({ ability }) => (
                    <li key={ability.name}>{ability.name}</li>
                ))}
            </ul>
        </>
    );
};

export default PokemonInfo;
