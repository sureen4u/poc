import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscrepanciesComponent } from './discrepancies/discrepancies.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DiscrepanciesComponent],
  declarations: [DiscrepanciesComponent, DetailsComponent],
})
export class InventoryManagerModule { }
