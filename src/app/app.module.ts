import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { LaunchrHomePageComponent } from './launchr-home-page/launchr-home-page.component';
import { LaunchrProductsComponent } from './launchr-products/launchr-products.component';
import { LaunchrProductDetailComponent } from './launchr-product-detail/launchr-product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    LaunchrHomePageComponent,
    LaunchrProductsComponent,
    LaunchrProductDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
