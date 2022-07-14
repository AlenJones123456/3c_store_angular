import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  transaction() {
    return this.http.get('http://127.0.0.1:5000/3c_store/api/v1/transaction/transaction/10');
    
  }
}
