//Hace que el component funcione
//Se importan los modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Aqui importamos el componente
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';
//Es el decorador que nos permite configurar el modulo
@NgModule({
  //Cargar los componentes, los pipes y directivas
  declarations: [ 
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  //cargan los modulos que se hayan instalado o propios de Angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //Cargar servicios
  providers: [],
  //Modulo principal que se va a cargar 
  bootstrap: [AppComponent]
})
//se exporta el modulo
export class AppModule { }
