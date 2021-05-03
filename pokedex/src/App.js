import { useEffect, useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './CSS/App.css';
import PokemonList from './Components/PokemonList'
import PokemonDetails from './Components/PokemonDetails'
import getPokemonId from './utils/GetPokemonId.js'
import About from './Components/About'

//[ DONE ] Home page (list all pokemon first 150 w/ picture)
//[ DONE] Click on Pokemon to view additional info path is /pokemon/bulbasaur/ goes to abilities
//[ DONE ] view info - abilities button - presented with a panel that defaults with their abilities
//[ DONE] view info - environment button - change panel to abilities.
//[DONE] About page - read info about the team that developed app
//[DONE ] On home page Dropdown box to filter pokemon by their types
//[DONE ] example “/pokemon/bulbasaur/environment” path that shows the environment panel for bulbasaour
// pokemon list - "https://pokeapi.co/api/v2/pokemon/?limit=20"
// abilities - "https://pokeapi.co/api/v2/pokemon/1/"
// environment (location area encounters) - "https://pokeapi.co/api/v2/pokemon/1/encounters"



const initialState ={
  pokemonList: null,
  types: null
};

function reducer(state, action){
  switch(action.type){
    case 'load':
      return {...state, pokemonList: action.payload}
    case 'loadTypes':
      return {... state, types: action.payload}
    default: 
      return state;
  }

};


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    const pokemon = getAllPokemon("https://pokeapi.co/api/v2/pokemon/?limit=151")
    async function getAllPokemon(url){
      const response = await fetch(url);
      const pokemon = await response.json(); //array of objects
      dispatch({type: "load", payload: pokemon.results})
    };
  }, []);

  useEffect(()=>{
    const types = getTypes("https://pokeapi.co/api/v2/type/")
    async function getTypes(url){
      const response = await fetch(url);
      const types = await response.json();
      dispatch({type: "loadTypes", payload: types.results})
    }
  }, [])
  
  async function filterTypes (typeId) {
    if(typeId === "all"){
      const pokemon = getAllPokemon("https://pokeapi.co/api/v2/pokemon/?limit=151")
      async function getAllPokemon(url){
        const response = await fetch(url);
        const pokemon = await response.json(); //array of objects
        dispatch({type: "load", payload: pokemon.results})
      };
    }

    else{
      const typeUrl = `https://pokeapi.co/api/v2/type/${typeId}`;
      const response = await fetch(typeUrl);
      const typeData = await response.json();
      const results = [];
      typeData.pokemon.map(p => {
        if(parseInt(getPokemonId(p.pokemon.url)) > 151){
          return;
        }
        else {
          results.push(p.pokemon)
        }
      })
      dispatch({type: "load", payload: results});
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <Link to = '/'>
        <h1>Pokedex&trade;</h1>
        </Link>
        <Link to ='/about'>
          <span>About</span>
        </Link>
        
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div className="typeFilter">
              <label for="types">Filter types:</label>
              <select name="types" onChange={(e)=>{
                if (state.types) {
                  filterTypes(e.target.value)
                }
              }}>
                <option value="all">all</option>
                {
                  state.types && state.types.map(t => {
                    const urlArray = t.url.split("/")
                    const typeId = urlArray[6]
                    return (<option value={typeId}>{t.name}</option>)
                  })
                }
              </select>
            </div>

            {state.pokemonList 
                ? <PokemonList pokemon={state.pokemonList} /> 
                : <h1>Loading...</h1>}
          </Route>
          <Route 
            path="/pokemon/:id" 
            component={
              ({match})=>(
                <PokemonDetails 
                  match={match} 
                  // pokemon={state.pokemonList.find((poke)=>getPokemonId(poke.url) === match.params.id)}
                />
              )
            }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// from state:
// name: "dratini"
// url: "https://pokeapi.co/api/v2/pokemon/147/"

// from types: name: "dratini"
// url: "https://pokeapi.co/api/v2/pokemon/147/"