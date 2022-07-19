import { Component, OnInit } from '@angular/core';
import { TransRecService } from 'src/app/services/trans_rec/trans-rec.service';

@Component({
  selector: 'app-trans-rec',
  templateUrl: './trans-rec.component.html',
  styleUrls: ['./trans-rec.component.scss']
})
export class TransRecComponent implements OnInit {
  allTransRec: any = [];
  constructor(private service: TransRecService) { }


  ngOnInit(): void {
    this.TransRec();
  }

  TransRec(): void {
    this.service
        .TransRec()
        .subscribe((response: any) => {
          console.log(response.transrec)
          this.allTransRec = response.tranrec;
        });
  }

}
