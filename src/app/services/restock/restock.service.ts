import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestockService {

  private restock_dataurl = 'http://127.0.0.1:5000/3c_store/api/v1/transaction/restock_data/3';
  private restock_detailurl = 'http://127.0.0.1:5000/3c_store/api/v1/transaction/restock_detail/68dded44-c6af-4027-848a-24e45b40a38c';


  constructor(private http: HttpClient) { }

  getrestockdata() {
    return this.http.get(this.restock_dataurl);
    
  }
  getrestock_detaildata(){
    return this.http.get(this.restock_detailurl);
}
}
