import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from '../../models/usuarioLogeado'; 
import { AuthService } from 'src/app/co/ada/services/auth.service';
import { RecursoPadre } from '../../models/detalle-usuario';
import { DetalleService } from '../../services/detalle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { InformacionFamiliar } from '../../models/InformacionFamiliar';
import { InformacionFamiliarService } from '../../services/informacion-familiar.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  csPerfil!: any;
  detallePadreHijo!: RecursoPadre[];
  csRecursoHijo!: any;
  usuario!: UsuarioLogeado;
  formFamiliar!: FormGroup;
  infamiliar: InformacionFamiliar[] = [];

  hnp_interno!: any;
  hnp_parentesco!: any;
  hnp_nombres!: any;
  hnp_fecha_nacimiento!: any;
  hnp_tipo!: any;
  hnp_documento!: any;
  hnp_sexo!: any;

  public datosFamiliares = this.formBuilder.group({
    hnp_nombres: ['ACTIVO', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private detalleService: DetalleService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private familiares: FormBuilder,
    private datosFamiliaresUser: InformacionFamiliarService
  ) {
    this.inicializarFormularioFamiliar;
  }

  inicializarFormularioFamiliar(): void {

    this.datosFamiliares.get('hnp_nombres')?.setValue('inactivo');
    console.log('formularioFamiliar');
  }

  obtenerDetalleFamiliar() {
    this.detalleService.getQuery(this.csPerfil).subscribe((resp: any) => {
      this.detallePadreHijo = resp.recursoPadreHijo;
      console.log(resp);
    });
  }


  getForms(idx: string, pag: string) {
    return this.router.navigate([pag]);
  }

  ngOnInit(): void {
    this.datosFamiliaresUser
      .datosUsuarioFamiliar('8237723')
      .subscribe((resp: InformacionFamiliar) => {
        this.infamiliar = [resp];
        console.log(this.infamiliar);

        console.log(resp);

        this.hnp_documento = this.infamiliar[0].hnp_documento
        this.hnp_fecha_nacimiento = this.infamiliar[0].hnp_fecha_nacimiento
        this.hnp_interno = this.infamiliar[0].hnp_interno
        this.hnp_nombres = this.infamiliar[0].hnp_nombres
        this.hnp_parentesco = this.infamiliar[0].hnp_parentesco
        this.hnp_sexo = this.infamiliar[0].hnp_sexo
        this.hnp_tipo = this.infamiliar[0].hnp_tipo

        console.log(this.infamiliar[0].hnp_documento);
      });

    this.formFamiliar = this.familiares.group({
  
      hnp_documento: [this.infamiliar[0].hnp_documento],
      hnp_fecha_nacimiento: [''],
      hnp_interno: [''],
      hnp_nombres: [''],
      hnp_parentesco: [''],
      hnp_sexo: [''],
      hnp_tipo: ['']

    });

    this.activeRoute.params.subscribe((repuesta: any) => {
      this.csPerfil = repuesta.csPerfil;
    });

    this.obtenerDetalleFamiliar();
  }

  // guardar(): void {
  //   console.log(this.datosForm.get('estado')?.value);
  //   console.log(this.datosForm.get('clase')?.value);
  //   this.datosForm.get('estado')?.setValue('inactivo');
  //   this.datosForm.get('clase')?.setValue('inactivo');
  // }

  guardar() {
    console.log(this.formFamiliar.value);
  }

}



