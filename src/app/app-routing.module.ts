import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaunchrHomePageComponent } from './launchr-home-page/launchr-home-page.component';
// import { LaunchrProductDetailComponent } from './launchr-product-detail/launchr-product-detail.component';
import { LaunchrProductsComponent } from './launchr-products/launchr-products.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  // {
  //   path: 'home',

  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  // },
  {
    path: 'launchr',
    loadChildren: () => import('./launchr/launchr.module').then(m =>  m.LaunchrModule),
  },
  // {
  //   path: 'order',
  //   loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule),
  // },
  { path: 'practice', component: PracticeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'launchr-home', component: LaunchrHomePageComponent },
  { path: 'products', component: LaunchrProductsComponent },
  // { path: 'product-detail', component: LaunchrProductDetailComponent },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
