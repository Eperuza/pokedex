import '../CSS/PokemonDetailsInfo.css';
import PokemonDetailsAbilities from './PokemonDetailsAbilities';
import { Link, Route, Switch } from 'react-router-dom'

function PokemonDetailsInfo ({pokemon}){
    /*console.log("POKEMON PASSED to detailsinfo: ", pokemon);
    console.log("TYPES in detailsinfo: ", pokemon.types);
    */
    return(
        <div className="pokeInfo">
            
            <div className="staticInfo">
                <div className="pokemonType">Type:</div>
                {//function used to get the types
                    pokemon.types.map(t => {
                        //console.log(t.type.name);
                        const typeName = t.type.name.slice(0,1).toUpperCase() + t.type.name.slice(1);
                        return <div className="pokemonType">{typeName}</div>
                    })
                }
            </div>
            <div className="buttonBar">
                <button>Abilities</button><button>Environment</button>
            </div>
            <div className="pokeData">
                
                {//function used to get the abilities 
                    pokemon.abilities.map(a =>{
                        const abilityName = a.ability.name.slice(0,1).toUpperCase() + a.ability.name.slice(1);
                        return <div className="pokemonAbility">{abilityName}</div>
                    })
                }

                {//function used to get the locations
                    console.log(pokemon)
                    //locationUrl = pokemon.location_area_encounters
                }
            </div>
        </div>
                    
        
    );
}

export default PokemonDetailsInfo;
