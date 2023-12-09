import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../StaticPages/login/login';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private httpClient : HttpClient) { }

  public recruiterLogin(login:Login):Observable<any>{
    return this.httpClient.post("http://localhost:8081/recLogin",login)
  }

  public candidateLogin(login:Login):Observable<any>{
    return this.httpClient.post("http://localhost:8081/candLogin",login)
  }


}