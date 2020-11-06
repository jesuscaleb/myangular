import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon : Pokemon;
  @Output() markAsFavorite = new EventEmitter();

  // Usando pipes reemplaza muchas funciones que modifiquen una propiedad en el DOM  
  // toLowerCase(string){
  //   return string.toLowerCase();
  // }

  selectPokemon(pokemon){
    this.markAsFavorite.emit({
      pokemon: pokemon
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
