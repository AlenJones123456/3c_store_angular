import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-edit-table',
  templateUrl: './form-edit-table.component.html',
  styleUrls: ['./form-edit-table.component.scss']
})
export class FormEditTableComponent implements OnInit {
  columns = ['Fullname', 'Age', 'Company Name', 'City', 'Country'];

  data = [
    ['Guerra Cortez', 45, 'Insectus', 'San Francisco', 'USA'],
    ['Elisa Gallagher', 31, 'Portica', 'London', 'United Kingdom'],
    ['Aurelia Vega', 30, 'Deepends', 'Madrid', 'Spain'],
    ['Guadalupe House', 26, 'Isotronic', 'Berlin', 'Germany'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
