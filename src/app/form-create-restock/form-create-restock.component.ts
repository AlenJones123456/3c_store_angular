import { Component, OnInit } from '@angular/core';
import { RestockService } from '../services/restock/restock.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-restock',
  templateUrl: './form-create-restock.component.html',
  styleUrls: ['./form-create-restock.component.scss']
})
export class FormCreateRestockComponent implements OnInit {
  forms:any;
  product_id: string="";
  sku_id: string="";
  product_name: string="";
  sku_code: string="";
  cost: number[]=[];
  sku_restock: any=[]
  sku_restock_code: any=[]

  constructor(private fobu:FormBuilder,private restock_dataurl:RestockService) { 
    this.forms=this.fobu.group({
      product_id:new FormControl(this.product_id[0],Validators.required),
      skucode:new FormControl(this.sku_code[0],Validators.required),
      productName:new FormControl(this.product_name[0],Validators.required),
      cost:new FormControl(this.cost[0],Validators.required),

    });
  }

  ngOnInit(): void {
    this.restock_dataurl.getrestockdata().subscribe((response:any) => {
      // this.product_id = response.data.product_id;
      // this.sku_id = response.data.sku_id;
      // this.product_name = response.data.product_name;
      // this.sku_code = response.data.sku_code;
      // this.cost = response.data.cost;
      this.sku_restock = response.data
    })     
  }
  onSelect(event:any){
    console.log(event.target.value)
    
    this.sku_restock.forEach(function (item:any) {
      if(item.product_id==event.target.value) {
        this.sku_restock_code=item.sku
      }
  });
    
  }
    

  }

