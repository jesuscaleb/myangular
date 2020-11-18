import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { delay } from 'rxjs/internal/operators';
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers : [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles : Array<Article>;
  public errorString : string;
  public loading : boolean;

  constructor(
    private _articleService : ArticleService,
    private _route : ActivatedRoute,
    private _router : Router
  ){
  }
  
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.loading = true;
      // Aplicar valores predeterminados para reiniciar valores de respuesta para cada búsqueda 
      this.errorString = "";
      this.articles = [];

      var search = params['search'];

      this._articleService.search(search).pipe(delay(700)).subscribe(
        response => {
          if (response.articles) {
            this.loading = false;
            this.articles = response.articles;
            console.log(this.articles);
          } else {
            this.articles = [];
            this.loading = false;
            this.errorString = "No hay artículos que coincidan con tu búsqueda.";
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
