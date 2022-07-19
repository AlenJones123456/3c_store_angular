import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  SKUForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.SKUForm = this.formBuilder.group({
      brand_id : ['',Validators.required],
      brand_name : ['',Validators.required],
      supplier_id : ['',Validators.required],
      supplier_name : ['',Validators.required],
      category_id : ['',Validators.required],
      category_name : ['',Validators.required]

    })
  }
  addData(){
    console.log(this.SKUForm.value);
  }

}
