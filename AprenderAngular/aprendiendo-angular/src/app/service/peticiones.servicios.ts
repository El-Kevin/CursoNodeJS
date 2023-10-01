import { Injectable} from "@angular/core";
//Va a permitir hacer peticiones ajax a un servicio externo y modificar las cabeceras de esas peticiones
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Recpger la informacion que devuelve el apirest
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/";
    }

    //peticion ajax con get
    getUser(userId: any): Observable<any>{
        //realizo la peticion ajax con http
        return this._http.get(this.url+'api/users/'+userId);
    }

    //peticion ajax con post
    addUser(user: any): Observable<any>{
        // convierto mi user a un FORMATO json
        let params = JSON.stringify(user)
        //configuro la cabecera
        let header = new HttpHeaders().set('Content-Type', 'application/json')
        //realizo la peticion ajax con http
        return this._http.post(this.url+'api/useres/', params, {headers: header});
    }
}
