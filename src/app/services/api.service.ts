import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("http://127.0.0.1:5000/3c_store/api/v1/sku/sku/20",data);
  }
  getProduct(){
    return this.http.get<any>("http://127.0.0.1:5000/3c_store/api/v1/sku/sku/20");
  }
  // putProduct(data : any, id : number){
  //   return this.http.put<any>("http://localhost:3000/CheckRecList/"+id, data);
  // }
  // deleteProduct(id : number){
  //   return this.http.delete<any>("http://localhost:3000/CheckRecList/"+id);
  // }
}
