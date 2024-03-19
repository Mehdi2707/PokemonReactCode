import {useParams} from 'react-router-dom';
import {PokemonForm} from '../components/PokemonForm';
import {useEffect, useState} from "react";
import PokemonService from "../services/pokemonService.js";
import {Loader} from "../components/Loader.jsx";

export function PokemonEdit() {

    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        PokemonService.getPokemon(id).then(pokemon => setPokemon(pokemon))
    }, [id]);

    return (
        <div>
            { pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer { pokemon.name }</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                <h4 className="center"><Loader /></h4>
                // <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
}