import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePasswordDTO } from '../models/change-password-dto';
import { EmailValuesDTO } from '../models/email-values-dto';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {

  changePasswordURL = environment.ChangePasswordURL;

  constructor(private httpClient: HttpClient) { }

  public sendEmail(dto: EmailValuesDTO): Observable<any>{
    return this.httpClient.post<any>(this.changePasswordURL + 'send-email', dto);
  }

  public changePassword(dto: ChangePasswordDTO): Observable<any>{
    return this.httpClient.post<any>(this.changePasswordURL + 'change-password', dto);
  }
}
