import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { Validators } from '@angular/forms';//驗證效果
import { SkuService } from 'src/app/services/sku/sku.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-form-sku-create',
  templateUrl: './form-sku-create.component.html',
  styleUrls: ['./form-sku-create.component.scss']
})
export class FormSkuCreateComponent implements OnInit {
  sku:any=[];
  form:any;
  sku_id:any=[];
  product_id:any=[];
  sku_code:any=[];
  sell_price:number[]=[];
  recom_price:number[]=[];
  cost:number[]=[];
  stock_quantity:number[]=[];
  constructor(private fb:FormBuilder,private skuURL:SkuService) {
    this.form=this.fb.group({
      // product_name:["",[Validators.required]],//Validators驗證，required必填
      // product_model:["",[Validators.required]],
      sku_id:new FormControl(this.sku_id[0],Validators.required),
      product_id:new FormControl(this.product_id[0],Validators.required),
      sku_code:new FormControl(this.sku_code[0],Validators.required),

    });
   }

   onSubmit(f:any){
     if(f.invalid){
       alert("Error while adding new data")
     }
     else
     {
       console.log(f);
       console.log(f.value);
       alert("Successfully added new data")

     }

   }
  ngOnInit(): void {
    this.skuURL.sku()
      .subscribe((response:any) => {
        this.sku = response.data;
        // this.sku_id = response.sku.sku_id[0];
        // this.product_id = response.sku.product_id;
        // this.sku_code = response.sku.sku_code;
        // this.sell_price = response.sku.sell_price;
        // this.recom_price = response.sku.recom_price;
        // this.cost = response.sku.cost;
        // this.stock_quantity = response.sku.stock_quantity;
      
      });
  }

}
