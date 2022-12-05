import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorProvider } from './co/ada/interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './co/ada/login/auth/login.component';
import { IndexComponent } from './co/ada/home/index/index.component';
import { FooterComponent } from './co/ada/shared/footer/footer.component';
import { CambiarPwComponent } from './co/ada/shared/cambiar-pw/cambiar-pw.component';
import { AuthService } from './co/ada/services/auth.service';
import { DatosPersonalesComponent } from './co/ada/forms/datos-personales/datos-personales.component'; 
import { EducacionComponent } from './co/ada/forms/educacion/educacion.component'; 
import { InfLaboralComponent } from './co/ada/forms/inf-laboral/inf-laboral.component'; 
import { FamiliaComponent } from './co/ada/forms/familia/familia.component'; 
import { SidenavComponent } from './co/ada/shared/sidenav/sidenav.component';
import { DetallesComponent } from './co/ada/forms/detalles/detalles.component'; 
import { LoginProveedorComponent } from './co/ada/login/login-proveedor/login-proveedor.component';
import { LoginContribuyenteComponent } from './co/ada/login/login-contribuyente/login-contribuyente.component';
import { NavbarComponent } from './co/ada/shared/navbar/navbar.component';
import { NavPintadoComponent } from './co/ada/shared/nav-pintado/nav-pintado.component';
import { ChangePasswordComponent } from './co/ada/changepassword/change-password.component';
import { SendEmailComponent } from './co/ada/changepassword/send-email.component';
import { CalidadComponent } from './co/ada/components/calidad/calidad.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    FooterComponent,
    CambiarPwComponent,
    DatosPersonalesComponent,
    EducacionComponent,
    InfLaboralComponent,
    FamiliaComponent,
    SidenavComponent,
    DetallesComponent,
    LoginProveedorComponent,
    LoginContribuyenteComponent,
    NavbarComponent,
    NavPintadoComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    CalidadComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
