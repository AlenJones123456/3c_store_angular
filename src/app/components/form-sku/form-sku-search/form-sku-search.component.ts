import { Component, OnInit } from '@angular/core';
import { SkuService } from 'src/app/services/sku/sku.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { post } from 'jquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-sku-search',
  templateUrl: './form-sku-search.component.html',
  styleUrls: ['./form-sku-search.component.scss']
})
export class FormSkuSearchComponent implements OnInit {
  sku:any=[];
  form:any=[];
  sku_id:string="";
  product_id:string="";
  sku_code:string="";
  sell_price:number[]=[];
  recom_price:number[]=[];
  cost:number[]=[];
  stock_quantity:number[]=[];
  searchText:any;
  posts:any=[];
  constructor(private skuRead:SkuService, private fb:FormBuilder,private skuURL:SkuService ,private http:HttpClient) { 
    this.form=this.fb.group({
      // product_name:["",[Validators.required]],//Validators驗證，required必填
      // product_model:["",[Validators.required]],
      sku_id:new FormControl(this.sku_id[0],Validators.required),
      product_id:new FormControl(this.product_id[0],Validators.required),
      sku_code:new FormControl(this.sku_code[0],Validators.required),
      sell_price:new FormControl(this.sell_price[0],Validators.required),
      recom_price:new FormControl(this.recom_price[0],Validators.required),
      cost:new FormControl(this.cost[0],Validators.required),
      stock_quantity:new FormControl(this.stock_quantity[0],Validators.required),

    });
  }

  onSubmit(add:any){

    if(add.invalid){
      alert("invalid")
    }
    else
    {
     this.http.post('http://127.0.0.1:5000/3c_store/api/v1/sku/addsku',add)
     .subscribe((result)=>{
       console.log("result",result);
     })
      console.log(add);
      alert("success")

    }

  }

  ngOnInit(): void {
    this.skuRead.sku()
      .subscribe((response:any) => {
        console.log(response.data);
        this.sku = response.data;
        this.posts = response.data;
      });
  }
  
}
