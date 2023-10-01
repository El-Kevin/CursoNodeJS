//importar los modulos del router en angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


//Importar componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegosComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Array de rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}//ruta 404 

];
//Exportar el modulo de rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
//export const AppRoutingModule: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);