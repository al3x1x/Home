import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecursoPadre } from '../models/detalle-usuario';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  BASE_URL = environment.BASE_URL;
  detallePerfiles: any;
  token:any;
  detallePadreHijo!: RecursoPadre[];
  ruta = new Subject<any>();


  constructor(private http: HttpClient) { }

  getForms(idx: number){
    return this.detallePadreHijo[idx];
   }

  getQuery( query: string ) {

    const url = `${this.BASE_URL}detalle/${query}`;
    let header = this.headers();
    this.token = localStorage.getItem('token') || '{}';

    return this.http.get(url, {headers: header});
    }

    getDetalleUsuario( perfil: number){
      return this.getQuery(`${perfil}`)
    }

    private headers() {
      let headers = new HttpHeaders({
          "Authorization": localStorage.getItem('token') || '{}'
      });
      return headers;

      
  }

}
