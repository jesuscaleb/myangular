import { BrowserModule } from '@angular/platform-browser';
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

// Importing components and custom components
import { AppComponent } from './app.component';
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
    EsParPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-PE'}, appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
