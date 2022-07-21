import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCreateRestockComponent } from './components/form/Restock/form-create-restock/form-create-restock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestockComponent } from './components/restock/restock.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    FormCreateRestockComponent,
    RestockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


