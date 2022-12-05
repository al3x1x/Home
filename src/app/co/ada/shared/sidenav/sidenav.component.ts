import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecursoPadre } from '../../models/detalle-usuario';
import { DetalleService } from '../../services/detalle.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  forms!: { id: number };
  csPerfil!: any;
  detallePadreHijo!: RecursoPadre[];
  Valor!: any;


  // url = 'http://localhost:9090/auth/detalles'

  constructor(
    private detalleService: DetalleService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) { }




  getForms(pag: string, perfil: number, i: number) {

    this.detalleService.ruta.subscribe()
    this.detalleService.ruta.next(pag)


    let link = this.router.navigate([pag]);


    switch (pag) {
      case 'forms/estudios':
      link= this.router.navigate([`/detalle/${perfil}/forms/estudios`]);
        break;
      case ('forms/datospersonales'):
      link= this.router.navigate([`/detalle/${perfil}/forms/datospersonales`]);
        break;
      case 'detalles/12439/forms/estados':
      link= this.router.navigate([`/calidad`]);
        break;
      case 'detalles/12439/forms/cualidad':
          link= this.router.navigate([`/detalle/${perfil}/calidad`]);
        break;
    }
  }

    // if (pag == 'forms/estudios')
        // return this.router.navigate([`/detalle/${perfil}/forms/estudios`]);
    

    // else if (pag == 'forms/datospersonales')
    //   return this.router.navigate([`/detalle/${perfil}/forms/datospersonales`])
    // else if(pag === 'calidad/forms/impactos')
    //   return window.location.href = 'http://10.1.20.84:1102/calidad/';
    // else if (pag == 'detalles/12439/forms/impactos')
    //   return this.router.navigate([`detalles/12439/forms/impactos`])
    // else(pag === '')
    //   return window.location.href = '';

  // }


  //   if (condición1)
  //    sentencia1
  // else if (condición2)
  //    sentencia2

  // getQuery( query: string ) {

  //   const url = `http://localhost:9090/auth/detalle/${ query }`;
  //   let header = this.headers();
  //   this.token = localStorage.getItem('token') || '{}';

  //   console.log("opciones ", header)
  //   console.log("peticion ", this.http.get(url, {headers: header}))
  //   return this.http.get(url, {headers: header});
  //   }



  obtenerDetalle() {
    this.detalleService.getQuery(this.csPerfil).subscribe((resp: any) => {
      this.detallePadreHijo = resp.recursoPadreHijo;
      console.log(resp)
    });
  }

  // detallesUsuarios(perfil : number) {
  //   console.log("redirigiendo a la vista detalle");
  //   this.router.navigateByUrl();
  // }

  ngOnInit(): void {


    this.activedRoute.params.subscribe((repuesta: any) => {
      this.csPerfil = repuesta.csPerfil;
    });

    this.obtenerDetalle();
  }

}
