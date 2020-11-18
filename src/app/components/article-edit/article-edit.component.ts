import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/internal/operators';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-create/article-create.component.html',
  styleUrls: ['./article-edit.component.sass'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public loading: boolean;
  public status: string;
  public page_title: string;
  public is_edit: boolean;
  public url : string;

  // angular-image-uploader settings
  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: '50', 
    uploadAPI: {
      url: Global.url + 'upload-image',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Selecciona ficheros.',
      resetBtn: 'Reiniciar',
      uploadBtn: 'Subir imagen',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen aquí',
      afterUploadMsg_success: 'Imagen se ha subido correctamente.',
      afterUploadMsg_error: 'Error en la subida.',
      sizeLimit: 'Límite de tamaño',
    },
  };

  constructor(
    private _articleService: ArticleService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    // Insertar nueva data para el modelo Article
    this.article = new Article('', '', '', null, null);
    this.page_title = 'Editar Artículo'; 
    this.is_edit = true;
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this.loading = true;
    this._articleService
      .update(this.article._id, this.article)
      .pipe(delay(700))
      .subscribe(
        (response) => {
          if (response.status == 'success') {
            this.loading = false;
            this.status = 'success';
            this.article = response.article;
            this._router.navigate(['/blog/article', this.article._id]);
            this._toastrService.success(response.message, Global.updated);
          } else {
            this.status = 'error';
            this._toastrService.error(response.message, this.status);
          }
        },
        (error) => {
          this.loading = false;
          this.status = 'error';
          console.log(error);
        }
      );
  }

  imageUpload(data){
    let response = JSON.stringify(data);
    let image_data = JSON.parse(response);
    this.article.image = image_data.body.image;
  }   

  getArticle(){
    // Conseguir el parámetro id desde la url.
    this.loading = true;
    this._route.params.subscribe(params => {
      let id = params['id'];
      
      // Evento subscribe con delay manual
      this._articleService.getArticle(id).pipe(delay(700)).subscribe(
        response => {
          if (response.article) {
            this.loading = false;
            this.article = response.article;
            console.log(response.article);
          } else {
            this.loading = false;
            this._router.navigate(['/home']);
          }
        },
        error => {
          this.loading = false;
          this._router.navigate(['/home']);
          console.log(error);
        }
      );
    });
  }

}
