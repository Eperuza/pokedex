import PokemonEntry from './PokemonEntry'
import '../CSS/PokemonList.css';

function PokemonList ({pokemon}){
    return(
        <div className="pokemonList">
            {pokemon.map((p)=>(<PokemonEntry key={p.name} pokemon={p}/>))}
        </div>
    )
}

export default PokemonList;

//{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}