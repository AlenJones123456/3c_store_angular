import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { RestockComponent } from './components/restock/restock.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    RestockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


