function PokemonDetailsInfo ({pokemon}){
    //console.log(pokemon)
    return(
        <div className="pokeInfo">
            <div className="staticInfo">Type: </div>
            <div className="buttonBar"><button>Abilities</button><button>Environment</button></div>
            <div className="poke-data">Button Data</div>
        </div>
                    
        
    );
}

export default PokemonDetailsInfo;

// {pokemon.types.map(type => {
//     return (
//         <p>{type.name}</p>
//     )
// })}