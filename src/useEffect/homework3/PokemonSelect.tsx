import {  useState } from "react";
import PokemonInfo from "./houseEx3";



 function PokemonSelect  ()  {
    const [pokemon, setPokemon]= useState('pikachu')




  return (
    <>
    <button onClick={() => setPokemon('pikachu')}>Pikachu</button>
    <button onClick={() => setPokemon('charmander')} >Charmander</button>
    <button onClick={() => setPokemon('bulbasaur')}>Bulbasaur</button>
    <button onClick={() => setPokemon('charizard')}>Charizard</button>
    
    <PokemonInfo name={pokemon} />
    </>
  );
};

export default PokemonSelect;