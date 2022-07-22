import { Component, OnInit } from '@angular/core';
import { RestockService } from 'src/app/services/restock/restock.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {
  allRestock: any;
  
  
  constructor(private ResctockLink : RestockService) { }

  ngOnInit(): void {
    this.getrestockdata();
  }

  getrestockdata(): void {
    this.ResctockLink
        .getrestockdata()
        .subscribe((response: any) => {
          console.log(response.data)
          this.allRestock = response.data;
        });
  }
}


