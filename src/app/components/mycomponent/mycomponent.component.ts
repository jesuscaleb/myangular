import { Component, OnInit, OnDestroy } from '@angular/core';

import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.sass']
})

export class MyComponent implements OnInit, OnDestroy {

  public foo : string;
  public paragraph: string;
  public date : any;

  // Impresion de elementos de un array
  
  public pokemons :  Array<Pokemon>;
  public favorite : Pokemon;

  constructor(){
    //  Solo se aplican valores a las propiedades de esta clase. No se permite lógica o funciones.
      this.foo = "We've seen creation come undone.";
      this.paragraph = "This bones that bound us will be gone.";
      this.date = new Date(2020, 6, 25);

      console.log(this.foo, this.paragraph);
      // Check app.module.ts for this component implementation and declaration

      // Alimentando al array pokemons
      this.pokemons = [
        new Pokemon("Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", ["Eléctrico"], "an hour ago", "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas."),
        new Pokemon("Charmander", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", ["Fuego"], "30 minutes ago", "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola."),
        new Pokemon("Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", ["Planta", "Veneno"] , "5 minutes ago","Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo."),
        new Pokemon("Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", ["Agua"] , "2 minutes ago", "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble."),
        new Pokemon("Metapod", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png", ["Bicho"] , "a moment ago", "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.")
      ];
  }

  showFavoritePokemons(event){
    this.favorite = event.pokemon;
  }

  ngOnInit(){
    // Se permite la implementación de lógica y funciones. Función que se ejecuta al cargar el componente.
    console.log(this.pokemons);
  }

  ngOnDestroy(){
    // Función que se ejecuta cuando se elimina un componente de un DOM.

    console.log("Contenedor MyComponent ha sido removido.");
  }
}
