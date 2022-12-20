import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseURL = "https://backend-repo2-faraahahmeed-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/trips"
  constructor(private httpClient: HttpClient) { }

  getTripsList():Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(`${this.baseURL}`);
  }

  createTrip(trip: Trip): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,trip);
  }

  getTripById(id:number): Observable<Trip>{
    return this.httpClient.get<Trip>(`${this.baseURL}/${id}`)
  }

  updateTrip(id: number, trip: Trip): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, trip);
  }

  deleteTrip(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
