import {useEffect, useState} from 'react'

function PokemonDetailsLocation({pokemon}){

    const [locations, setLocations] = useState(null);

    useEffect(()=>{
     const locations = getLocations(pokemon.location_area_encounters);
     async function getLocations(url){
         const response = await fetch(url);
         const locations = await response.json(); //array of objects
         console.log(locations);
         setLocations(locations);
     }
     }, [])
    return(
        <div>
            <h4>This pokemon can be found in the following areas:</h4>
            {locations && locations.map(l => {
                console.log(l.location_area.name);
                return (<div key={l.location_area.name} className="location">{l.location_area.name}</div>)
            })}
        </div>
    )
}

export default PokemonDetailsLocation;