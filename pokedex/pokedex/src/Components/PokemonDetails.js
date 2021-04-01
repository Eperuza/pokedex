import { useEffect, useState } from 'react'
import getPokemonId from '../utils/GetPokemonId.js'
import PokemonDetailsInfo from './PokemonDetailsInfo.js';

const PokemonDetails = ({match, pokemon}) => {
    const [state, setState] = useState({});

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
            <h1>{pokemon.name}</h1>
            <div>
                <span><img src={imgSrc} alt={pokemon.name} width="250px" height="250px" /> </span>
                <span>
                    {state && <PokemonDetailsInfo pokemon={state}/>}
                </span>
            </div>
            {match.params.id} pokemon details
        </div>
    )
}
//https://pokeapi.co/api/v2/pokemon/${match.params.id}/

export default PokemonDetails


//https://pokeapi.co/api/v2/type/{id or name}/ TYPES


//https://pokeapi.co/api/v2/pokemon/{id or name}/encounters LOCATION

//https://pokeapi.co/api/v2/ability/{id or name}/ ABILITIES