import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './Sidebarsample/body/body.component';
import { CoupensComponent } from './Sidebarsample/coupens/coupens.component';
import { DashboardComponent } from './Sidebarsample/dashboard/dashboard.component';
import { MediaComponent } from './Sidebarsample/media/media.component';
import { PagesComponent } from './Sidebarsample/pages/pages.component';
import { ProductsComponent } from './Sidebarsample/products/products.component';
import { SettingsComponent } from './Sidebarsample/settings/settings.component';
import { SidenavComponent } from './Sidebarsample/sidenav/sidenav.component';
import { StatisticsComponent } from './Sidebarsample/statistics/statistics.component';
import { FormSampleComponent } from './form-restockdetail/form-restockdetail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    BodyComponent,
    CoupensComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    SidenavComponent,
    StatisticsComponent,
    FormSampleComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


