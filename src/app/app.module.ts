import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormProductCreateComponent } from './components/form/form-product-create/form-product-create.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductReadComponent } from './components/form/form-product-read/form-product-read.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from '@angular/forms';//雙向綁定要import

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    FormProductCreateComponent,
    FormProductReadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


