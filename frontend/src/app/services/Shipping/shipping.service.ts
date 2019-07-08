import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingRegion } from 'src/app/models/shipping-region';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  url = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getShippingRegions(): Observable<ShippingRegion[]>{
    return this.http.get<ShippingRegion[]>(`${this.url}shipping/getShippingRegions`);
  }

}
