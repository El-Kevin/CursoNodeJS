import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.servicios';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public newUser: any;
  public usuario_guardado: any
  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.newUser = {
      name: "",
      job: ""
    };
  }

  ngOnInit() {
    this.cargaUsuario(this.userId);
    this.fecha = new Date();
  }

  cargaUsuario(idUser: any) {
    this.user = false;
    this._peticionesService.getUser(idUser).subscribe(
      (result) => {
        // Aquí puedes manejar la respuesta del servicio
        console.log(result);
        this.user = result.data;
      },
      (error) => {
        // Aquí puedes manejar los errores si ocurren
        console.error(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    // Aquí puedes manejar la lógica cuando se envía el formulario
    this._peticionesService.addUser(this.newUser).subscribe(
      response =>{
        this.usuario_guardado = response;
        console.log("prueba")
        console.log(this.usuario_guardado);
        
        console.log(response);
        
        
        form.reset();
      },
      error => {
        console.error(<any>error);
      } );
  }

}