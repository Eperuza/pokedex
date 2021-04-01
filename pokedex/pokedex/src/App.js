import { useEffect, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';
import PokemonList from './Components/PokemonList'
import PokemonDetails from './Components/PokemonDetails'

//[ DONE ] Home page (list all pokemon first 150 w/ picture)
//[ ] Click on Pokemon to view additional info path is /pokemon/bulbasaur/ goes to abilities
//[ ] view info - abilities button - presented with a panel that defaults with their abilities
//[ ] view info - environment button - change panel to abilities.
//[ ] About page - read info about the team that developed app
//[ ] On home page Dropdown box to filter pokemon by their types
//[ ] example “/pokemon/bulbasaur/environment” path that shows the environment panel for bulbasaour
// pokemon list - "https://pokeapi.co/api/v2/pokemon/?limit=20"
// abilities - "https://pokeapi.co/api/v2/pokemon/1/"
// environment (location area encounters) - "https://pokeapi.co/api/v2/pokemon/1/encounters"



const initialState ={
  pokemon: null,
  currentPokemon: {
    id: 0,
    abilities: [],
    environment: [],  
  }
};

function reducer(state, action){
  switch(action.type){
    case 'load':
      return {...state, pokemon: action.payload}
    default: 
      return state;
  }

};


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    const pokemon = getAllPokemon("https://pokeapi.co/api/v2/pokemon/?limit=150")
    async function getAllPokemon(url){
      const response = await fetch(url);
      const pokemon = await response.json(); //array of objects
      dispatch({type: "load", payload: pokemon.results})
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex&trade;</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {!state.pokemon && "Loading..."}
            {state.pokemon && <PokemonList pokemon={state.pokemon} />}
          </Route>
          <Route path="/pokemon/:id" component={({match})=><PokemonDetails match={match} />}>
            
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
