import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormProductCreateComponent } from './components/form/form-product-create/form-product-create.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { FormProductReadComponent } from './components/form/form-product-read/form-product-read.component';



const appRoute:Routes=[
  {path:"",component:FormProductReadComponent},
  {path:'create',component: FormProductCreateComponent},
  {path:'read',component: FormProductReadComponent},

]
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
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


