import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  usuario : any;

  constructor(
    private router: Router) { }

  Cv() {
    this.router.navigate(["/cv"]);
  }

  NavProveedor() {
    this.router.navigate(["/proveedor"]);
  }

  NavContribuyente() {
    this.router.navigate(["/contribuyente"]);
  }



  detallesUsuarios(perfil : number) {
    console.log("redirigiendo a la vista detalle");
    let link = this.router.navigateByUrl(`/detalles/${perfil}`);
    console.log("link: ",link)
    return link
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  }

}

