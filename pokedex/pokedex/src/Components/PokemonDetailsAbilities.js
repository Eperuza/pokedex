import PokemonDetailsInfo from "./PokemonDetailsInfo";

function PokemonDetailsAbilities({pokemon}){
    return(
        <>
            { 
                pokemon.abilities.map(a =>{
                    const abilityName = a.ability.name.slice(0,1).toUpperCase() + a.ability.name.slice(1);
                    return (
                        <div key={abilityName} className="pokemonAbility">
                            {abilityName}
                        </div>
                    )
                })
            }
        </>
    )
}

export default PokemonDetailsAbilities;