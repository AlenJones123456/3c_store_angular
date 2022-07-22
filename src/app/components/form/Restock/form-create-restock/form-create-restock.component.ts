import { Component, OnInit } from '@angular/core';
import { RestockService } from '../../../../services/restock/restock.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  sku_restock_cost: any=[]
  display = "none";

  constructor(private fobu:FormBuilder,private restock_dataurl:RestockService,private http:HttpClient) { 
    this.forms=this.fobu.group({
      product_id:new FormControl(this.product_id[0],Validators.required),
      skucode:new FormControl(this.sku_code[0],Validators.required),
      productName:new FormControl(this.product_name[0],Validators.required),
      cost:new FormControl(this.cost[0],Validators.required),

    });
  }

  onSubmit(create:any){

    if(create.invalid){
      alert("invalid")
    }
    else
    {
     this.http.post("http://127.0.0.1:5000/3c_store/api/v1/transaction/restock",create)
     .subscribe((result)=>{
       console.log("result",result);
     })
      console.log(create);
      alert("success")

    }

  }
  

  ngOnInit(): void {
    this.restock_dataurl.getrestockdata().subscribe((response:any) => {
      this.sku_restock = response.data
      
    })     
  }
  onSelect(event:any){
    this.sku_restock_code=this.sku_restock.filter((product:any) => product.product_name==event.target.value)[0].sku;
    // console.log(this.sku_restock_cost)
    // const cost = document.getElementById(get_restock_cost)
  }

  oncostSelect(event:any){
    this.sku_restock_cost=this.sku_restock_code.filter((Cost:any) => Cost.cost==event.target.value)[0].sku;
      console.log(this.sku_restock_cost)
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  }

