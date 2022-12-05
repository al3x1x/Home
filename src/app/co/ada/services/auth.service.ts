import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = environment.BASE_URL;
  dataUser : any;
  userToken: any;

  constructor(private httpClient: HttpClient) {
    this.leerToken();
   }

  logout(){
    localStorage.removeItem('token');
  }

  login(loginUsuario: LoginUsuario): Observable<LoginUsuario> {
    const url = `${this.BASE_URL}login/`;
    console.log(url)
    return this.httpClient.post<LoginUsuario>(url, loginUsuario)

    .pipe(
      map((resp : any)=>{
        this.guardarToken(resp['token']);
        return resp;
      })  
    );
}

  private guardarToken(token: string){
    
  this.userToken = token;
  localStorage.setItem('token', token);

  }

leerToken(){
  if(localStorage.getItem('token')){
    this.userToken = localStorage.getItem('token');
  }else{
    this.userToken = '';
  }

  return this.userToken;

}

estaAutenticado():boolean{
  return this.userToken.length > 2;
}

}
