import '../CSS/PokemonEntry.css'
import { Link } from 'react-router-dom'

function PokemonEntry({pokemon}){
    const pokemonName = pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1);
    const pokeId = getPokemonId(pokemon.url)
    return(
        <Link to={`/pokemon/${pokeId}`}>
            <div className="pokemonEntry">  
                <div className="pokemon">{pokemonName} <br/>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}></img></div>       
            </div>
        </Link>
    ); 
}


export default PokemonEntry;

// pokemon url -"https://pokeapi.co/api/v2/pokemon/131/,
//
// image url - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png,

//pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")
//returns urlSplit = [https://pokeapi.co/api/v2/pokemon/ , ID]
// img src = 'https://pokeapi.co/api/v2/pokemon/'+'urlSplit[1]'

function getPokemonId(url){
    const urlSplit = url.split("/");
    return urlSplit[6];
}

//call getImage(pokemon.url)