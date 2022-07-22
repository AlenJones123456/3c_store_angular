import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://127.0.0.1:5000/3c_store/api/v1/product/addproduct';
  private urlread = 'http://127.0.0.1:5000/3c_store/api/v1/product/products/';
  private urlDelete = 'http://127.0.0.1:5000/3c_store/api/v1/product/product/';


  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);

  }
  getRead(){
    return this.httpClient.get(this.urlread);
  }
  getDelete(){
    return this.httpClient.get(this.urlDelete);
  }
}
