import { Component, OnInit } from '@angular/core';
/** 
 * Prueba para cargar parametros por la URL.
 * Para utilizar los modulos Router y ActivatedRoute se deben cargar en el constructor.
 */
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  public nombre : string;
  public apellido : string;

  constructor(
    private _route: ActivatedRoute, // Saca los parámetros de la URL.
    private _router: Router // Redirecciona a otras páginas.
  ) { }
  
  ngOnInit() {
    /**
    * Recoger los parametros de la URL
    * Angular trabaja mucho con Observables.
    * La función de los Observables es esperar la respuesta de un servicio, asíncrono o no.
    * Método subscribe es un Observable y se utilizará en este ejemplo.
    */
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    })
  }

  /**
   * Redireccionar a una página
   */

  redirect(){
    this._router.navigate(['/test', 'Jesus', 'Oria']);
  }
}
