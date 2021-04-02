import { useEffect, useState } from 'react'
import getPokemonId from '../utils/GetPokemonId.js'
import PokemonDetailsInfo from './PokemonDetailsInfo.js';
import '../CSS/PokemonDetails.css'

const PokemonDetails = ({match}) => {

    const [state, setState] = useState(null);
    const pokemonName = state && state.name.slice(0,1).toUpperCase() + state.name.slice(1);

    useEffect(() => {
        const pokeInfo = getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`)
        async function getPokemonInfo(url){
            const response = await fetch(url);
            const pokeInfo = await response.json();
            setState(pokeInfo);  
    }}, 
    [match])
   
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${match.params.id}.svg`
    return (
        <div className="container">
            <div className="head">
                <h1>{state && pokemonName}</h1>
                <h2>Number: {match.params.id}</h2>
            </div>
            <div className="pokeImage"><img src={imgSrc} alt={state ? state.name : "pokemon"} width="200px" height="200px" /> </div>
            <div className="pokeDetails">
                {state && <PokemonDetailsInfo pokemon={state} id={match.params.id}/>}
            </div>
            {/*console.log("The state in pokemon details: ", state)*/}
        </div>
    )
}


export default PokemonDetails


//https://pokeapi.co/api/v2/type/{id or name}/ TYPES


//https://pokeapi.co/api/v2/pokemon/{id or name}/encounters LOCATION

//https://pokeapi.co/api/v2/ability/{id or name}/ ABILITIES