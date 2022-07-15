import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  CheckRecForm !: FormGroup;
  // actionBtn : string = "Add";
  constructor(private FormBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.CheckRecForm = this.FormBuilder.group({
      sku_id : ['',Validators.required],
      product_id : ['',Validators.required],
      sku_code : ['',Validators.required],
      sell_price : ['',Validators.required],
      recom_price : ['',Validators.required],
      cost : ['',Validators.required],
      stock_quantity : ['',Validators.required],
      create_time : ['',Validators.required],
      update_time : ['',Validators.required],
      memo : ['']
    })
    
    // if(this.editData){
    //   this.actionBtn = "Update";
    //   this.CheckRecForm.controls['sku_id'].setValue(this.editData.sku_id);
    //   this.CheckRecForm.controls['product_id'].setValue(this.editData.product_id);
    //   this.CheckRecForm.controls['sku_code'].setValue(this.editData.sku_code);
    //   this.CheckRecForm.controls['sell_price'].setValue(this.editData.sell_price);
    //   this.CheckRecForm.controls['recom_price'].setValue(this.editData.recom_price);
    //   this.CheckRecForm.controls['cost'].setValue(this.editData.cost);
    //   this.CheckRecForm.controls['stock_quantity'].setValue(this.editData.stock_quantity);
    //   this.CheckRecForm.controls['create_time'].setValue(this.editData.create_time);
    //   this.CheckRecForm.controls['update_time'].setValue(this.editData.update_time);
    //   this.CheckRecForm.controls['memo'].setValue(this.editData.memo);
    // }

  }
  addProduct(){
    if(this.CheckRecForm.valid){
      this.api.postProduct(this.CheckRecForm.value)
      .subscribe({
        next:(res)=>{
          alert("Data added successfully");
          this.CheckRecForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the data")
        }
      })
    }
  }

}
