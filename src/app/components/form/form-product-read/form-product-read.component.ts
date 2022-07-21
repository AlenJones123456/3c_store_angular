import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { Validators } from '@angular/forms';//驗證效果
import { __values } from 'tslib';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from 'jquery';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form-product-read',
  templateUrl: './form-product-read.component.html',
  styleUrls: ['./form-product-read.component.scss']
})
export class FormProductReadComponent implements OnInit {
  form:any;
  brands_id:string="";
  brand_name:string="";
  category_name:string="";
  category_id:number[]=[];
  supplier_name:string="";
  supplier_id:number[]=[];
  searchText:any;
  posts:any=[];
  tb:string[]=[
    'ID','PRODUCT_NAME','PRODUCT_MODEL','BRAND_ID','CATEGORY_ID','SUPPLIER_ID','CREATE_TIME','DETAILS'
  ];
  constructor(private productRead:ProductService,private fb:FormBuilder,private productURL:ProductService,private http:HttpClient) {
    this.form=this.fb.group({
      product_name:["",[Validators.required]],//Validators驗證，required必填
      product_model:["",[Validators.required]],
      details:'',
      brand_id:new FormControl(this.brand_name[0],Validators.required),
      category_id:new FormControl(this.category_name[0],Validators.required),
      supplier_id:new FormControl(this.supplier_name[0],Validators.required),

    });
  }

  onSubmit(f:any){

    if(f.invalid){
      alert("invalid")
    }
    else
    {
     this.http.post(environment.url+"product/addproduct/",f)
     .subscribe((result)=>{
       console.log("result",result);
     })
      console.log();
      alert("success")

    }

  }

  ngOnInit(): void {

    this.productRead.getRead()
      .subscribe((response:any) => {
        this.posts = response.Products;
      });
      this.productURL.getPosts()
      .subscribe((response:any) => {
        this.brands_id = response.data.brand_list.brand_id;
        this.brand_name = response.data.brand_list.brand_name;
        this.category_name = response.data.category_list.category_name;
        this.category_id = response.data.category_list.category_id;
        this.supplier_name = response.data.supplier_list.supplier_name;
        this.supplier_id = response.data.supplier_list.supplier_id;
      });


  }
  deleteProduct(post:any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body:{'product_id':post}
  };
    this.http.delete("http://127.0.0.1:5000/3c_store/api/v1/product/product/",httpOptions)
     .subscribe((result)=>{
       console.log("result",result);
     })
      console.log(post);
      alert(post)

    }
  }


