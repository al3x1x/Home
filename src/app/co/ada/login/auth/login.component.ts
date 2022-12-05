import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ListaPerfilesEmpleados } from '../../models/usuarioLogeado';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {


  isLoginFail = false;
  listaPerfilesEmpleados!: ListaPerfilesEmpleados;
  roles: string[] = [];
  errMsj!: string;
  perfilesUsuario!: '';
  tipo: boolean = true;
  tipo2: string = 'password';
  id: string = '';
  loginUsuario:LoginUsuario = new LoginUsuario();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private fb:FormBuilder,
    private auth:AuthService

    
  ) { }

  ngOnInit() {
    if(localStorage.getItem("token") != null){
      this.router.navigate([`/index`]);
   }
  }

  NavProveedor(){
    this.router.navigate(["/proveedor"]);
  }

  Contribuyente(){
    this.router.navigate(["/contribuyente"]);
  }
  sendemail(){
    this.router.navigate(["/sendemail"]);
  }

  error(){
    this.router.navigate(["/login"]);
  }

  onLogin(form: NgForm){
  
    if(form.invalid){
      Swal.fire("Error", "Debe de llenar los campos para ingresar", "error");
      return;
    }
    Swal.fire({
      icon: 'info',
      text: 'Espere un momento',
      title: 'Ingresando....',
    });
    Swal.showLoading();

  this.auth.login(this.loginUsuario).subscribe(
      (data : any)  => {
       this.auth.dataUser = data;
        if(data.logeado === true && localStorage.getItem("token")){  
          localStorage.setItem('usuario', JSON.stringify(data));
  
          this.router.navigate([`/index`]); //LO LLEVA AL INDEX
          Swal.close();
        }else{
          Swal.fire("Error", "Las credenciales no son correctas, ingrese las credenciales validas", "error");
        }
      },error => {
        Swal.fire("Error", "Ha ocurrido un error en el servidor, por favor intentelo mas tarde", "error");
      }
      
    );
  }

  verContrasena(){
    this.tipo2 = 'text';
    this.tipo = false
  }

  ocultarContrasena(){
    this.tipo2 = 'password';
    this.tipo = true;
  }

}