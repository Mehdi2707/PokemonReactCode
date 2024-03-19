import POKEMONS from "../models/mock-pokemon.ts";

export default class PokemonService {

    static pokemons = POKEMONS;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

    static getPokemons() {
        if(this.isDev) {
            return fetch('http://localhost:3001/pokemons')
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            resolve(this.pokemons);
        });
    }

    static getPokemon(id) {
        if(this.isDev) {
            return fetch(`http://localhost:3001/pokemons/${id}`)
                .then(response => response.json())
                .then(data => this.isEmpty(data) ? null : data)
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            resolve(this.pokemons.find(pokemon => id === pokemon.id));
        });
    }

    static updatePokemon(pokemon) {
        if(this.isDev) {
            return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
                method: 'PUT',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id } = pokemon;
            const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
            this.pokemons[index] = pokemon;
            resolve(pokemon);
        });
    }

    static deletePokemon(pokemon) {
        if(this.isDev) {
            return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id } = pokemon;
            this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
            resolve({});
        });
    }

    static addPokemon(pokemon) {
        pokemon.created = new Date(pokemon.created);

        if(this.isDev) {
            return fetch(`http://localhost:3001/pokemons`, {
                method: 'POST',
                body: JSON.stringify(pokemon),
                headers: { 'Content-Type': 'application/json'}
            })
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            this.pokemons.push(pokemon);
            resolve(pokemon);
        });
    }

    static searchPokemon(term) {
        if(this.isDev) {
            return fetch(`http://localhost:3001/pokemons?q=${term}`)
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const results = this.pokemons.filter(pokemon => pokemon.name.includes(term));
            resolve(results);
        });

    }

    static isEmpty(data) {
        return Object.keys(data).length === 0;
    }

    static handleError(error) {
        console.error(error);
    }
}