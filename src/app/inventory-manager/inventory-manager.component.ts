import { Component, Output,OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.css']
})
export class InventoryManagerComponent implements OnInit {
  selectedItem = {};

  constructor() { }

  ngOnInit() {
  }
  onRowItemSelected(item:any){
    this.selectedItem = item;
  }
}
