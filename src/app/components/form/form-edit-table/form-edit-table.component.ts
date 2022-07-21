// import { Component, ViewChild, } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {MdbTableEditorDirective} from "mdb-table-editor";

// @Component({
//   selector: 'app-form-edit-table',
//   templateUrl: './form-edit-table.component.html',
//   styleUrls: ['./form-edit-table.component.scss']
// })
// export class FormEditTableComponent {
//   @ViewChild('table', { static: true }) mdbTableEditor: MdbTableEditorDirective;
//   headElements = ['ID', 'Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'];
//   visibleItems: number = 10;
//   searchText: string = '';
//   highlightedRow: any = null;

// constructor(private http: HttpClient) {
//   this.http.get('http://www.json-generator.com/api/json/get/cfDQtoFAde?indent=2').subscribe((data: any) => {
//     data.forEach((el: any, index: number) => {
//     el.id = index + 1;
//   });
//     this.mdbTableEditor.dataArray = data;
//   });
// }

// addModalForm(form: any, modalInstance: any) {
//   const values: any = {
//     id: this.mdbTableEditor.dataArray[this.mdbTableEditor.dataArray.length - 1]['id'] + 1,
//     name: form[0].value,
//     position: form[1].value,
//     office: form[2].value,
//     age: form[3].value,
//     start_date: form[4].value,
//     salary: form[5].value
//   };
//   this.mdbTableEditor.dataArray.push(values);
//   this.mdbTableEditor.iterableDataArray.push(values);
//   this.mdbTableEditor.updatePaginationInfo();
//   modalInstance.hide();
// }

// editModalForm(form: any, modalInstance: any) {
//   const userDataRowIndex = this.mdbTableEditor.dataArray.findIndex((el: any) => el.name === this.highlightedRow.name);
//   const values: any = {
//     id: userDataRowIndex + 1,
//     name: form[0].value,
//     position: form[1].value,
//     office: form[2].value,
//     age: form[3].value,
//     start_date: form[4].value,
//     salary: form[5].value
//   };
//   this.mdbTableEditor.dataArray[userDataRowIndex] = values;
//   this.mdbTableEditor.iterableDataArray[userDataRowIndex] = values;
//   this.mdbTableEditor.iterableDataArray[userDataRowIndex] = values;
//   modalInstance.hide();
// }

// modalRemove(modalInstance: any) {
//   const rowIndex = this.mdbTableEditor.dataArray.findIndex((el: any) => el == this.highlightedRow);
//   this.mdbTableEditor.dataArray.splice(rowIndex, 1);
//   this.mdbTableEditor.iterableDataArray.splice(rowIndex, 1);
//   this.mdbTableEditor.updatePaginationInfo();
//   modalInstance.hide();
// }
// }








