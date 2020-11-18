import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon";


@Injectable()
export class PokemonService {

    public pokemons :  Array<Pokemon>;

    constructor(){
        this.pokemons = [
            new Pokemon("Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", ["Eléctrico"], "an hour ago", "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas."),
            new Pokemon("Charmander", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", ["Fuego"], "30 minutes ago", "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola."),
            new Pokemon("Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", ["Planta", "Veneno"] , "5 minutes ago","Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."),
            new Pokemon("Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", ["Agua"] , "2 minutes ago", "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble."),
            new Pokemon("Metapod", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png", ["Bicho"] , "a moment ago", "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.")
        ];
    }

    holaMundo(){
        return "Hola Mundo desde un servicio Angular.";
    }

    getPokemons(){
        return this.pokemons;
    }
}