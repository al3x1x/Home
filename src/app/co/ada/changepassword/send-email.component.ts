import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmailValuesDTO } from '../models/email-values-dto';
import { EmailPasswordService } from '../services/email-password.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  mailTo!: string;
  dto!: EmailValuesDTO;

  constructor(
    private emailPasswordService: EmailPasswordService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onSendEmail(): void {
    this.dto = new EmailValuesDTO(this.mailTo);
    this.emailPasswordService.sendEmail(this.dto).subscribe(
      data => {
          this.toastrService.success(data.mensaje, 'OK', {
            timeOut: 5000, positionClass: 'toast-top-center'
          });
          console.log("Se ha enviado información al correo");
      },
      err => {
        
        this.toastrService.error(err.error.mensaje, 'FAIL', {
          timeOut: 5000, positionClass: 'toast-top-center'
        });
        console.log("No se ha podido enviar información");
      }
    );
  }

}
