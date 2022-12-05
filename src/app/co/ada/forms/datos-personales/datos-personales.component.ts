import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from '../../models/usuarioLogeado'; 
import { AuthService } from 'src/app/co/ada/services/auth.service';
import { RecursoPadre } from '../../models/detalle-usuario';
import { DetalleService } from '../../services/detalle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { DatosPersonalesEmpleado } from '../../models/DatosPersonalesEmpleado';
import { DataUserService } from '../../services/data-user.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
})
export class DatosPersonalesComponent implements OnInit {
  csPerfil!: any;
  detallePadreHijo!: RecursoPadre[];
  csRecursoHijo!: any;
  usuario!: UsuarioLogeado;
  formVida!: FormGroup;
  datos: DatosPersonalesEmpleado[] = [];

  nombre!: any;
  nitsd!: any;
  tipo_vinculo!: any;
  tipoDocumento!: any;
  nit!: any;
  ciudad!: any;
  email!: any;
  fechaCreacion!: any;
  estado!: any;
  direccion!: any;
  telefono!: any;

  public datosForm = this.formBuilder.group({
    estado: ['ACTIVO', [Validators.required]],
    clase: ['ACTIVO', [Validators.required]],
    nombres: ['ACTIVO', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private detalleService: DetalleService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dataUser: DataUserService 
  ) {
    this.inicializarFormulario;
  }

  inicializarFormulario(): void {
    // this.datosForm = this.formBuilder.group({
    //   estado: [ 'hola' , [Validators.required]]
    // })
    this.datosForm.get('estado')?.setValue('inactivo');
    console.log('formulario');
  }

  obtenerDetalle() {
    this.detalleService.getQuery(this.csPerfil).subscribe((resp: any) => {
      this.detallePadreHijo = resp.recursoPadreHijo;
      console.log(resp);
    });
  }

  // obtenerDetalle(){
  //   this.detalleService.getQuery(this.csPerfil).subscribe((resp: any)=>{
  //    this.detallePadreHijo = resp.recursoPadreHijo;

  //   });
  // }

  getForms(idx: string, pag: string) {
    return this.router.navigate([pag]);
  }

  ngOnInit(): void {
    this.dataUser
      .datosUsuario('8237723')
      .subscribe((resp: DatosPersonalesEmpleado) => {
        this.datos = [resp];
        console.log(this.datos);

        console.log(resp);

        this.nombre = this.datos[0].nombre
        this.nitsd = this.datos[0].nitsd
        this.tipo_vinculo = this.datos[0].tipo_vinculo
        this.tipoDocumento = this.datos[0].tipoDocumento
        this.nit = this.datos[0].nit
        this.ciudad = this.datos[0].ciudad
        this.email = this.datos[0].email
        this.fechaCreacion = this.datos[0].fechaCreacion
        this.estado = this.datos[0].estado
        this.direccion = this.datos[0].direccion
        this.telefono = this.datos[0].telefono

        console.log(this.datos[0].nitsd);
      });

    this.formVida = this.fb.group({
      nitsd: [this.datos[0].nitsd],
      clase: [''],
      tipo_vinculo: [''],
      nombre: [''],
      tipoDocumento: [''],
      expedicion: [''],
      nit: [''],
      ciudad: [''],
      email: [''],
      fechaCreacion: [''],
      estado: [''],
      direccion: [''],
      telefono: [''],
      nacimiento: [''],
      municipio: [''],
    });

    this.activeRoute.params.subscribe((repuesta: any) => {
      this.csPerfil = repuesta.csPerfil;
    });

    this.obtenerDetalle();
  }

  // guardar(): void {
  //   console.log(this.datosForm.get('estado')?.value);
  //   console.log(this.datosForm.get('clase')?.value);
  //   this.datosForm.get('estado')?.setValue('inactivo');
  //   this.datosForm.get('clase')?.setValue('inactivo');
  // }

  guardar() {
    console.log(this.formVida.value);
  }
}



