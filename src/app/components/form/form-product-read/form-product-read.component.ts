import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
@Component({
  selector: 'app-form-product-read',
  templateUrl: './form-product-read.component.html',
  styleUrls: ['./form-product-read.component.scss']
})
export class FormProductReadComponent implements OnInit {
  searchText:any;
  posts:any=[];
  constructor(private productRead:ProductService) { }

  ngOnInit(): void {
    this.productRead.getRead()
      .subscribe((response:any) => {
        this.posts = response.Products;
      });
  }

}
