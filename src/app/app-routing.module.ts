import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule) },
  { path: 'products', loadChildren: () => import('./product/product-routing.module').then(m => m.ProductRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
