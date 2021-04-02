function PokemonDetailsInfo ({pokemon}){
    /*console.log("POKEMON PASSED to detailsinfo: ", pokemon);
    console.log("TYPES in detailsinfo: ", pokemon.types);
    */
    return(
        <div className="pokeInfo">
            <div className="staticInfo">Type: 
                {
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
            <div className="pokeData">Display information based on which button pressed!</div>
        </div>
                    
        
    );
}

export default PokemonDetailsInfo;
