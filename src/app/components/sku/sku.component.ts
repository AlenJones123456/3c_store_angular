import { Component, OnInit } from '@angular/core';
import { SkuService } from 'src/app/services/sku/sku.service';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SkuComponent implements OnInit {
  allSku: any = [];
  constructor(private service: SkuService) { }

  ngOnInit(): void {
    this.sku();
  }

  sku(): void {
    this.service
        .sku()
        .subscribe((response: any) => {
          console.log(response.sku)
          this.allSku = response.sku;
        });
  }


}
