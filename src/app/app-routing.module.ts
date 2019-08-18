import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'accounts', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'companies', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'invoices', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'orders', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
