import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers : [ArticleService]
})
export class HomeComponent implements OnInit {

  public title : string;
  public loading : boolean;
  public articles : Array<Article>;
  public errorString : string;

  constructor(
    private _articleService : ArticleService
  ) { 
    this.title = "Últimos artículos.";
  }

  ngOnInit(): void{
    this.loading = true;
    this._articleService.getArticles(true).pipe(delay(700)).subscribe(
      response => {
        if(response.articles){
          this.loading = false;
          this.articles = response.articles;
        }else if (response.articles.length <= 0){
          this.errorString = "No hay artículos para mostrar";
        }
      },
      error => {
        this.loading = false;
        this.errorString = "Tenemos un problema con el servidor. Por favor inténtelo más tarde";
        console.log(error)
      }
    );

  }

}
