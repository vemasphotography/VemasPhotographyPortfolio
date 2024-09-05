import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public url=environment.apiURL;
  signUp(data:any): Observable<any>{
    return this._http.post(this.url + '/user/signup',data,{
      headers:new HttpHeaders().set('content-Type','application/json')})
  }

  forgotPassword(data:any):Observable<any>{
    return this._http.post(this.url+'/user/forgotPasword',data,{
      headers:new HttpHeaders().set('content-Type','application/json')})
  }
}
