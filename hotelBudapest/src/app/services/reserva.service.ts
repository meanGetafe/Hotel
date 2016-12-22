import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Habitacion } from '../model/habitacion'

@Injectable()
export class ReservaService {

  private url: string = "http://localhost:1111/hotel/consulta";
  constructor(private http: Http) { }

  reservar(habitaciones: Habitacion[]): Observable<string> {
    console.log("Entra en el servicio", habitaciones);
    return this.http.post(this.url, habitaciones)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        console.log("Error en peticion", error);
        return Observable.throw("Error al consultar " || error.json().error);
      });
  }

}
