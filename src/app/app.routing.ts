// Importar módulos del router 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes a las cuales les quiero hacer una página exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormComponent } from "./components/form/form.component";
import { PageComponent } from "./components/page/page.component";
import { MyComponent } from "./components/mycomponent/mycomponent.component";
import { e404Component } from './components/e404/e404.component';

// Configuración de rutas | Array de rutas
const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {path: 'page', component: MyComponent},
    {path: 'test', component: PageComponent},
    {path: 'test/:nombre/:apellido', component: PageComponent},
    /** 
     *  La ruta ** significa que esta ruta se cargará cuando se busque una ruta que no existe.
     *  Es importante que esta ruta se implemente al último lugar de este arreglo para evitar problemas con las rutas.
     */
    {path: '**', component: e404Component}
];

// Exportar módulo de rutas
export const appRoutesProviders : any[] = []; // Establecer este arreglo vacío como servicio 

/**
 *  Cargar la configuración de rutas al pasar los valores de appRoutes. 
 *  En Angular 10, ModuleWithProviders requiere un tipo genérico, agregar un <any> basta para continuar.
 *  En versiones anteriores:
        export const routing :  ModuleWithProviders = RouterModule.forRoot(appRoutes);
 */
export const routing :  ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
