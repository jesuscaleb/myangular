import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

// Importamos componentes para la recuperación del parámetro en la URL
import { Router, ActivatedRoute, Params } from '@angular/router';
import { delay } from 'rxjs/internal/operators';
import { Global } from 'src/app/services/global';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  // Necesario para conseguir template personalizado de la alerta
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;

  public article: Article;
  public url: string;
  public loading: boolean;
  public sweetalert: any;

  constructor(
    private _articleService: ArticleService,
    private _toastrService: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
    this.sweetalert = {
      title: 'Estás seguro',
      text: 'Este artículo se eliminará permanentemente.',
      confirmText: 'Borrar',
      cancelText: 'Cancelar',
    };
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    // Conseguir el parámetro id desde la url.
    this.loading = true;
    this._route.params.subscribe((params) => {
      let id = params['id'];

      // Evento subscribe con delay manual
      this._articleService
        .getArticle(id)
        .pipe(delay(700))
        .subscribe(
          (response) => {
            if (response.article) {
              this.loading = false;
              this.article = response.article;
              console.log(response.article);
            } else {
              this.loading = false;
              this._router.navigate(['/home']);
            }
          },
          (error) => {
            this.loading = false;
            this._router.navigate(['/home']);
            console.log(error);
          }
        );
    });
  }

  delete(id) {
    this._articleService.delete(id).subscribe(
      (response) => {
        this._router.navigate(['/blog']);
        this._toastrService.success(response.message, Global.deleted);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
