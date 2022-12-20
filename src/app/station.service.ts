import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  [x: string]: any;

  private baseURL = "http://172.30.105.154/stations";

  constructor(private httpClient: HttpClient) {}

    getStationsList(): Observable<Station[]>{
      return this.httpClient.get<Station[]>(this.baseURL);
    }
}


