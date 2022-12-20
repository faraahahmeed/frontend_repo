import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;
  private signupUrl= "http://backend-repo2-faraahahmeed-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/signup"; 
  private signinUrl= "https://backend-repo2-faraahahmeed-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/signin"; 
  constructor(private httpclient: HttpClient) { }
  adminsignup(admin: Admin):Observable<Admin>{
    return this.httpclient.post<Admin>(this.signupUrl, admin);
  }
  adminsignin(admin: Admin):Observable<Admin>{
    return this.httpclient.get<Admin>(this.signinUrl);
  }

}
