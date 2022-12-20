import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;
  private signupUrl= "http://172.30.105.154/signup"; 
  private signinUrl= "http://172.30.105.154/admin/signin"; 
  constructor(private httpclient: HttpClient) { }
  adminsignup(admin: Admin):Observable<Admin>{
    return this.httpclient.post<Admin>(this.signupUrl, admin);
  }
  adminsignin(admin: Admin):Observable<Admin>{
    return this.httpclient.get<Admin>(this.signinUrl);
  }

}
