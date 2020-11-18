import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import  { Observable } from "rxjs";


// Importar valor global de la URL de la API.
import { Global } from "./global";

@Injectable()
export class ArticleService { 

    public url : string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    // Peticiones HTTP

    // Listar articulos | Parámetro opcional last para listar 5 últimos artículos
    getArticles(last: any = null):Observable<any>{
        var articles = 'articles';
        if(last != null) { articles = 'articles/true' };
        return this._http.get(this.url + articles);
    }

    // Conseguir articulo por id
    getArticle(articleId):Observable<any>{
        return this._http.get(this.url + "article/" + articleId);    
    }

    search(searchString):Observable<any>{
        return this._http.get(this.url + "search/" + searchString);    
    }

    create(article):Observable<any>{
        // La api hecha en NodeJS recibirá JSON asi que conviertes el objeto article en JSON String.
        let params = JSON.stringify(article);
        // Configurar diferentes cabeceras (configuraciones, autorizaciones, etc.)
        let headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.url + "save/", params, {headers: headers});    
    }

    update(id, article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('content-type', 'application/json');

        return this._http.put(this.url + "article/" + id, params, {headers: headers});    
    }

    delete(id):Observable<any>{
        return this._http.delete(this.url + "article/" + id);    
    }
}