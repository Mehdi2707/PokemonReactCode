import {PokemonForm} from '../components/PokemonForm';
import {useState} from "react";
import Pokemon from "../models/pokemon";

export function PokemonAdd() {
    const [id] = useState(new Date().getTime())
    const [pokemon] = useState(new Pokemon(id))

    return (
        <div>
            {
                <div className="row">
                    <h2 className="header center">Ajouter un pokémon</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
                </div>
            }
        </div>
    );
}