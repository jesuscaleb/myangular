import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.sass'],
  providers : [PokemonService]
})

export class MyComponent implements OnInit, OnDestroy {

  public foo : string;
  public paragraph: string;
  public date : any;

  // Impresion de elementos de un array
  
  public pokemons : Array<Pokemon>;
  public favorite : Pokemon;

  constructor(
    private _pokemonService : PokemonService
  ){
    //  Solo se aplican valores a las propiedades de esta clase. No se permite lógica o funciones.
      this.foo = "We've seen creation come undone.";
      this.paragraph = "This bones that bound us will be gone.";
      this.date = new Date(2020, 6, 25); 

      // Invocar el array pokemon desde el servicio
      this.pokemons = this._pokemonService.getPokemons();

      console.log(this.foo, this.paragraph);
      // Check app.module.ts for this component implementation and declaration
  }

  showFavoritePokemons(event){
    this.favorite = event.pokemon;
  }

  ngOnInit(){
    // Se permite la implementación de lógica y funciones. Función que se ejecuta al cargar el componente.
    
  }

  ngOnDestroy(){
    // Función que se ejecuta cuando se elimina un componente de un DOM.

    console.log("Contenedor MyComponent ha sido removido.");
  }
}
