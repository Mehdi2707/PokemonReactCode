import {useEffect, useState} from "react";
import {PokemonCard} from "../components/PokemonCard.jsx";
import PokemonService from "../services/pokemonService.js";
import {Link} from "react-router-dom";
import {PokemonSearch} from "../components/PokemonSearch.jsx";

export function PokemonList () {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
    }, [])

    return <>
              {/*<h1 className="center">Bonjour, il y a {pokemons.length} pokémons dans votre application !</h1>*/}
              <div className="container">
                  <div className="row">
                      <PokemonSearch />
                      {pokemons.map(pokemon => (
                          <PokemonCard key={pokemon.id} pokemon={pokemon} />
                      ))}
                  </div>
                  <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
                        style={{position: 'fixed', bottom: '25px', right: '25px'}}
                        to="/pokemon/add">
                      <i className="material-icons">add</i>
                  </Link>
              </div>
           </>
}