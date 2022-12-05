import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './co/ada/home/index/index.component';
import { LoginComponent } from './co/ada/login/auth/login.component';
import { ProdGuardService as guard, ProdGuardService } from './co/ada/guards/prod-guard.service';
import { FooterComponent } from './co/ada/shared/footer/footer.component';
import { LoginProveedorComponent } from './co/ada/login/login-proveedor/login-proveedor.component';
import { LoginContribuyenteComponent } from './co/ada/login/login-contribuyente/login-contribuyente.component';
import { CambiarPwComponent } from './co/ada/shared/cambiar-pw/cambiar-pw.component';
import { DatosPersonalesComponent } from './co/ada/forms/datos-personales/datos-personales.component'; 
import { EducacionComponent } from './co/ada/forms/educacion/educacion.component'; 
import { FamiliaComponent } from './co/ada/forms/familia/familia.component'; 
import { InfLaboralComponent } from './co/ada/forms/inf-laboral/inf-laboral.component'; 
import { DetallesComponent } from './co/ada/forms/detalles/detalles.component'; 
import { NavbarComponent } from './co/ada/shared/navbar/navbar.component';
import { SendEmailComponent } from './co/ada/changepassword/send-email.component';
import { ChangePasswordComponent } from './co/ada/changepassword/change-password.component';
import { CalidadComponent } from './co/ada/components/calidad/calidad.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sendemail', component: SendEmailComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  // { path: 'change-password/:tokenPassword', component: ChangePasswordComponent },
  { path: 'index', component: IndexComponent, canActivate: [ ProdGuardService ]},
  { path: 'cambiar-pw', component: CambiarPwComponent },
  { path: 'proveedor', component: LoginProveedorComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contribuyente', component: LoginContribuyenteComponent },
  { path: 'calidad', component: CalidadComponent },
  { path: 'detalles/:csPerfil', component: DetallesComponent, canActivate: [ ProdGuardService ] },
  { path: 'detalle/:csPerfil/forms/datospersonales', component: DatosPersonalesComponent, canActivate: [ ProdGuardService ] },
  { path: 'detalle/:csPerfil/forms/estudios', component: EducacionComponent, canActivate: [ ProdGuardService ] },
  { path: 'detalle/:csPerfil/forms/familia', component: FamiliaComponent, canActivate: [ ProdGuardService ] },
  { path: 'inf-laboral', component: InfLaboralComponent, canActivate: [ ProdGuardService ] },
  { path:  'footer', component: FooterComponent, data: { expectedRol: ['admin', 'user'] } },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
