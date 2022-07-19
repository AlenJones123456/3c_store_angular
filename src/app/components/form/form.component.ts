import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { Validators } from '@angular/forms';//驗證效果
import { ProductService } from 'src/app/services/products/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form:any;
  posts:any=[];
  constructor(private fb:FormBuilder,private productURL:ProductService) {
    this.form=this.fb.group({
      product_name:["",[Validators.required]],//Validators驗證，required必填
      product_model:["",[Validators.required]],
      brand:new FormControl(this.posts[0],Validators.required),
      category:new FormControl(this.posts[0],Validators.required),
      supplier:new FormControl(this.posts[0],Validators.required),

    });
   }

   onSubmit(f:any){
     if(f.invalid){
       alert("invalid")
     }
     else
     {
       console.log(f);
       console.log(f.value);
       alert("success")

     }

   }
  ngOnInit(): void {
    this.productURL.getPosts()
      .subscribe((response:any) => {
        console.log(response)
        this.posts = response.Products;
      });
  }

}
