import { Component, OnInit } from '@angular/core';
import { RestockService } from '../services/restock/restock.service';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-restockdetail.component.html',
  styleUrls: ['./form-restockdetail.component.scss']
})
export class FormSampleComponent implements OnInit{
  forms:any=[];
  constructor(private formsamp:RestockService) { }

  ngOnInit(): void {
    this.formsamp.getrestockdata().subscribe((response:any) => {console.log(response) 
      this.forms = response.formsamp;
  })
    this.formsamp.getrestock_detaildata().subscribe((Response:any)=> {console.log(Response)
        this.forms = Response.formsamp;
      })
}
}
