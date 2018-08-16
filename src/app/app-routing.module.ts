import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryPageComponent } from './Inventory/inventory-page/inventory-page.component';
import { MispricingPageComponent } from './Mispricing/mispricing-page/mispricing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchPageComponent } from './Search/search-page/search-page.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'mispricing',
    component: MispricingPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '/inventory'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
