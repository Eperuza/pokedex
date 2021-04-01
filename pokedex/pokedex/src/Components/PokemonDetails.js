const PokemonDetails = ({match}) => {

    return (
        <div>
            {match.params.id} pokemon details
        </div>
    )
}

export default PokemonDetails