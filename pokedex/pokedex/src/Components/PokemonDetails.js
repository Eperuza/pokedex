import { useEffect, useState } from 'react'
import getPokemonId from '../utils/GetPokemonId.js'
import PokemonDetailsInfo from './PokemonDetailsInfo.js';

const PokemonDetails = ({match, pokemon}) => {

    const [state, setState] = useState(null);
    const pokemonName = pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1);

    useEffect(() => {
        const pokeInfo = getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`)
        async function getPokemonInfo(url){
            const response = await fetch(url);
            const pokeInfo = await response.json();
            setState(pokeInfo);  
    }}, 
    [])
   
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${match.params.id}.svg`
    return (
        <div>
            <h1>{pokemonName}</h1>
            <h2>ID: {match.params.id}</h2>
            <div>
                <span><img src={imgSrc} alt={pokemon.name} width="250px" height="250px" /> </span>
                <span>
                    {state && <PokemonDetailsInfo pokemon={state}/>}
                </span>
            </div>
            {/*console.log("The state in pokemon details: ", state)*/}
        </div>
    )
}


export default PokemonDetails


//https://pokeapi.co/api/v2/type/{id or name}/ TYPES


//https://pokeapi.co/api/v2/pokemon/{id or name}/encounters LOCATION

//https://pokeapi.co/api/v2/ability/{id or name}/ ABILITIES