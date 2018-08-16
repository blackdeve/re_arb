import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './Search/search-page/search-page.component';
import { InventoryPageComponent } from './Inventory/inventory-page/inventory-page.component';
import { MispricingPageComponent } from './Mispricing/mispricing-page/mispricing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TableModuleComponent } from './Inventory/table-module/table-module.component';
import { InventoryChartModuleComponent } from './Inventory/inventory-chart-module/inventory-chart-module.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartModuleComponent } from './Mispricing/line-chart-module/line-chart-module.component';
import { MispricingTableModule1Component } from './Mispricing/mispricing-table-module1/mispricing-table-module1.component';
import { MispricingTableModule2Component } from './Mispricing/mispricing-table-module2/mispricing-table-module2.component';
import { TableLineChartModuleComponent } from './Mispricing/table-line-chart-module/table-line-chart-module.component';
import { MispricingTablePieChartModuleComponent } from './Mispricing/mispricing-table-pie-chart-module/mispricing-table-pie-chart-module.component';
import { PropertySearchModuleComponent } from './Search/property-search-module/property-search-module.component';
import { RemarksSearchModuleComponent } from './Search/remarks-search-module/remarks-search-module.component';
import { LocationSearchModuleComponent } from './Search/location-search-module/location-search-module.component';
import { StatusSearchModuleComponent } from './Search/status-search-module/status-search-module.component';
import { ShowResultsModuleComponent } from './Search/show-results-module/show-results-module.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    SearchPageComponent,
    InventoryPageComponent,
    MispricingPageComponent,
    ErrorPageComponent,
    TableModuleComponent,
    InventoryChartModuleComponent,
    LineChartModuleComponent,
    MispricingTableModule1Component,
    MispricingTableModule2Component,
    TableLineChartModuleComponent,
    MispricingTablePieChartModuleComponent,
    PropertySearchModuleComponent,
    RemarksSearchModuleComponent,
    LocationSearchModuleComponent,
    StatusSearchModuleComponent,
    ShowResultsModuleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
