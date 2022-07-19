import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { TransRecComponent } from './components/trans-rec/trans-rec.component';
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
@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ProductComponent,
    TransRecComponent,
    BodyComponent,
    CoupensComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    SidenavComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


