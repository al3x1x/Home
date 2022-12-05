import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioLogeado } from '../../models/usuarioLogeado';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  usuario !: UsuarioLogeado;
  user: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('usuario') != null){
      this.isLogged = true;
    }
    this.user = JSON.parse(localStorage.getItem('usuario') || '{}');
  }

  cerrarSesion(){

    Swal.fire({
      title: '¿Está seguro que desea cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cerrar',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        this.router.navigateByUrl('/login');
      }
    })
  }
}


