import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DatosPersonalesEmpleado } from '../models/DatosPersonalesEmpleado';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http: HttpClient) { }

  datosUsuario(id: any){
    return this.http.get<DatosPersonalesEmpleado>(`http://10.1.20.84:1102/servicio-portal-empleados-0.0.1-SNAPSHOT/empleados/empleados/${id}`)
  }
}
