import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  posts:any=[];
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response:any) => {
        console.log(response)
        this.posts = response.Products;
      });
}

}
