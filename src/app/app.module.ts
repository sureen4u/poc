import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { InventoryManagerComponent } from './inventory-manager/inventory-manager.component';
import {MaterialModule} from '@angular/Material';
import { DiscrepanciesComponent } from './inventory-manager/discrepancies/discrepancies.component';
import { DatepickerModule } from 'angular2-material-datepicker'
import { DetailsComponent } from './inventory-manager/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryManagerComponent,
    DiscrepanciesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    DatepickerModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
