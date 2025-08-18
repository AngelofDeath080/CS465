import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripData {
  
  
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/trips';

  getTrip(tripCode: string) : Observable<Trip[]> {

    return this.http.get<Trip[]>(this.url);
  }

  addTrip(value: any) {
    return this.http.post<Trip>(this.url, FormData);
  }
  updateTrip(value: any) {
    throw new Error('Method not implemented.');
  }
}
