import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/resetpassword';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpclient : HttpClient) { }

  RegisterUser(user) : Observable<any>{
    return this.httpclient.post(`${BASEURL}/register`,user)
  }



  LoginUser(user) : Observable<any>{
    return this.httpclient.post(`${BASEURL}/login`,user)
  }

  requestResetUser(user) : Observable<any>{
    return this.httpclient.post(`${BASEURL}/request-reset`,user)
  }

  newPassword(user) : Observable<any>{
    return this.httpclient.post(`${BASEURL}/newpassword`,user)
  }
  validateTokemuser(user) : Observable<any>{
    return this.httpclient.post(`${BASEURL}/newpassword`,user)
  }
}
