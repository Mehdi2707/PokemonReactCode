import './pokemonCard.css'
import {useState} from "react";
import {formatDate} from "../helpers/formatDate.js";
import {formatType} from "../helpers/formatType.js";
import {useNavigate} from 'react-router-dom'

export function PokemonCard ({pokemon, borderColor = '#009688'}) {

    const [color, setColor] = useState()
    const history = useNavigate()
    const showBorder = () => {
        setColor(borderColor)
    }
    const hideBorder = () => {
        setColor('#f5f5f5')
    }

    const goToPokemon = (id) => {
        history(`/pokemons/${id}`)
    }

    return <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
               <div className="card horizontal" style={{borderColor: color}}>
                   <div className="card-image">
                       <img src={pokemon.picture} alt={pokemon.name} />
                   </div>
                   <div className="card-stacked">
                       <div className="card-content">
                           <p>{pokemon.name}</p>
                           <p><small>{formatDate(pokemon.created)}</small></p>
                           {pokemon.types.map(type => (
                               <span key={type} className={formatType(type)}>{type}</span>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
}