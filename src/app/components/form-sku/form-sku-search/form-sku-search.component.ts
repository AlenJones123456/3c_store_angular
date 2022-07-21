import { Component, OnInit } from '@angular/core';
import { SkuService } from 'src/app/services/sku/sku.service';

@Component({
  selector: 'app-form-sku-search',
  templateUrl: './form-sku-search.component.html',
  styleUrls: ['./form-sku-search.component.scss']
})
export class FormSkuSearchComponent implements OnInit {
  searchText:any;
  posts:any=[];
  constructor(private skuRead:SkuService) { }

  ngOnInit(): void {
    this.skuRead.sku()
      .subscribe((response:any) => {
        console.log(response.data);
        
        this.posts = response.data;
      });
  }

}