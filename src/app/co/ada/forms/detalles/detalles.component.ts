import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleService } from 'src/app/co/ada/services/detalle.service';
import { RecursoPadre } from '../../models/detalle-usuario';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  csPerfil!: any;
  detallePadreHijo!: RecursoPadre[];
  csRecursoHijo!: any;

  constructor(
     private detalleService: DetalleService,
     private activeRoute: ActivatedRoute
     ) { }

    getForms(idx: number){
      return this.detallePadreHijo[idx];
    }

  obtenerDetalle(){

    this.detalleService.getQuery(this.csPerfil).subscribe((resp: any)=>{
      
      this.detallePadreHijo = resp.recursoPadreHijo;
    });
  }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe((repuesta : any)=>{
      this.csPerfil = repuesta.csPerfil;
    }); 

    this.obtenerDetalle();
  }

}
