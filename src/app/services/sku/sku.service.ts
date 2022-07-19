import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SkuService {

  constructor(private http: HttpClient) { }

  sku() {
    return this.http.get('http://127.0.0.1:5000/3c_store/api/v1/sku/sku/11');
    
  }
}

