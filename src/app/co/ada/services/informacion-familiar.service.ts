import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InformacionFamiliar } from '../models/InformacionFamiliar';

@Injectable({
  providedIn: 'root'
})
export class InformacionFamiliarService {

  constructor(private http: HttpClient) { }

  datosUsuarioFamiliar(hnp_documento: any){
    return this.http.get<InformacionFamiliar>(`http://10.1.20.84:1102/servicio-portal-empleados-0.0.1-SNAPSHOT/empleados/empleados/${hnp_documento}`)
  }
} 