import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  allTransaction: any = [];
  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.transaction();
  }

  transaction(): void {
    this.service
        .transaction()
        .subscribe((response: any) => {
          console.log(response.transaction)
          this.allTransaction = response.transaction;
        });
  }


}
