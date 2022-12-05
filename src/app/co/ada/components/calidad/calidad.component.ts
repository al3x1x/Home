import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { DetalleService } from '../../services/detalle.service';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.css']
})
export class CalidadComponent implements OnInit {

  constructor(
    private detalle: DetalleService
  ) { }

  Valor!: any;
  

  ngOnInit(): void {
    this.detalle.ruta.subscribe(data => {
      this.Valor=data
      console.log(this.Valor);
      console.log(this.detalle.ruta);


    
  // this.Valor= localStorage.getItem('ruta');
  
// for(let i=0; i< this.Valor.length; i ++){

//   this.Valor.replaceAll("[","");
// }

// console.log("arreglo sin [", this.Valor);

    })
  }

}
