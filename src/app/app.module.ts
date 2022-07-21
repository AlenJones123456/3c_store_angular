import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { SkuComponent } from './components/sku/sku.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBootstrapComponent } from './components/form-bootstrap/form-bootstrap.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormSkuCreateComponent } from './components/form-sku/form-sku-create/form-sku-create.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    SkuComponent,
    NavbarComponent,
    FormComponent,
    FormBootstrapComponent,
    SidenavComponent,
    FormSkuCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


