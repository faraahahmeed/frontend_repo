import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  [x: string]: any;

  private baseURL = "https://backend-repo2-faraahahmeed-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/stations";

  constructor(private httpClient: HttpClient) {}

    getStationsList(): Observable<Station[]>{
      return this.httpClient.get<Station[]>(this.baseURL);
    }
}


