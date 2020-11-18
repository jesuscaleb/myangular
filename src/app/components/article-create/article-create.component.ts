import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/internal/operators';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.sass'],
  providers: [ArticleService]
})
export class ArticleCreateComponent implements OnInit {

  public article: Article;
  public loading: boolean;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

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
    private _toastrService : ToastrService,
    private _router: Router
  ) {
    // Insertar nueva data para el modelo Article
    this.article = new Article('', '', '', null, null);
    this.page_title = "Crear artículo";
    this.is_edit = false;
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.loading = true;
    this._articleService
      .create(this.article)
      .pipe(delay(700))
      .subscribe(
        (response) => {
          if (response.status == 'success') {
            this.loading = false;
            this.status = 'success';
            this.article = response.article;
            this._router.navigate(['/blog']);
            this._toastrService.success(response.message, Global.saved);
          } else {
            this.status = 'error';
            this._toastrService.error(response.message, this.status);
          }
        },
        (error) => {
          this.loading = false;
          console.log(error);
          this.status = 'error';
        }
      );
  }

  imageUpload(data){
    let response = JSON.stringify(data);
    let image_data = JSON.parse(response);
    this.article.image = image_data.body.image;
  }   
}
