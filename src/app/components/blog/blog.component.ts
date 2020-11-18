import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from "../../services/article.service";
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  providers : [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles :  Array<Article>;
  public loading : boolean;
  public errorString: string;

  constructor(
    private _articleService : ArticleService,
  ){}

  ngOnInit(): void {
    this.loading = true;
    this._articleService.getArticles().pipe(delay(700)).subscribe(
      response => {
        if(response.articles){
          this.loading = false;
          this.articles = response.articles;
        }else if (response.articles.length <= 0){
          this.loading = false;
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
