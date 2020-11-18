import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID , NgModule } from '@angular/core';

//Importando paquetes de lenguaje para formato fecha 
import { registerLocaleData } from '@angular/common';
import localeEsPE from '@angular/common/locales/es-PE';

registerLocaleData(localeEsPE, 'es-PE');

/** 
 * Importando las constantes del módulo de routing
 * La constante appRoutesProviders se cargará como servicio.
 * La constante routing se cargará como módulo. 
 * Para cargar el módulo "routing" se debe implementar en la sección imports de NgModule porque realiza cambios en el funcionamiento global del framework.
 * Para cargar el servicio "appRoutesProviders" se debe implementar en la sección providers de NgModule 
 */
import { appRoutesProviders, routing } from "./app.routing"; 

// Para manejar formulario es indispensable usar el módulo Forms
import { FormsModule } from "@angular/forms";
// Para manejar peticiones HTTP por AJAX
import { HttpClientModule } from "@angular/common/http";
// Importamos la libreria ngx-moment (transformacion de fechas) descargada de npm 
import { MomentModule } from 'ngx-moment';
// Importamos la librería ngx-loading (efecto de carga de contenido) descargada de npm
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
// Importamos la librería angular-file-uploader (subida de ficheros) descargada de npm
import { AngularFileUploaderModule } from "angular-file-uploader";
// Importamos la libreria ngx-toastr (mensajes de alerta en modelo toast)
import { ToastrModule } from 'ngx-toastr';
// Importamos la libreria ngx-sweetalert2 (mensajes de confirmación en especial)
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Importing custom components
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyComponent } from './components/mycomponent/mycomponent.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { e404Component } from './components/e404/e404.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

// Importing custom pipes
import { EsParPipe } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

const ngxLoadingConfig = {
  animationType: ngxLoadingAnimationTypes.wanderingCubes,
  backdropBackgroundColour: 'rgba(255, 255, 255, 0.8)', 
  backdropBorderRadius: '4px',
  primaryColour: '#f51d1d', 
  secondaryColour: '#f13e3e', 
  tertiaryColour: '#f55d5d'
};

const ngxToastrConfig = {
  disableTimeOut: false,
  timeOut: 6500,
  positionClass: 'toast-top-right',
  progressBar: true,
  progressAnimationType: 'decreasing',
  tapToDismiss: true,
  closeButton: true,
  preventDuplicates: true,
  countDuplicates: true,
  extendedTimeOut: 1000,
  maxOpened: 3,
  autoDismiss: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    MyComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormComponent,
    PageComponent,
    e404Component,
    PokemonComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleCreateComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    NgxLoadingModule.forRoot(ngxLoadingConfig),
    ToastrModule.forRoot(ngxToastrConfig),
    SweetAlert2Module.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-PE'}, appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
