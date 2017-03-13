import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';


@Component({
  selector: 'app-discrepancies',
  templateUrl: 'discrepancies.component.html',
  styleUrls: ['discrepancies.component.css']
})
export class DiscrepanciesComponent implements OnInit {
  data = [
    {
      "assignedTo":"STOCK",
      "loc":"ATL",
      "acNumber":"016",
      "fleet":"A319",
      "scheduledDate":"03/09/2017",
      "twDate":"12/21/2290",
      "mtx":"xyz-sc",
      "cpn":"4077968",
      "partDesc":"OIL",
      "qty":"A/R",
      "uom":"QT",
      "localQOH":72,
      "maps":"CRITICAL",
      "mcuStatus":"",
      "comments":"",
      "haz":"Y"
    },
    {
      "assignedTo":"STOCK",
      "loc":"ATL",
      "acNumber":"016",
      "fleet":"A319",
      "scheduledDate":"03/09/2017",
      "twDate":"12/21/2290",
      "mtx":"xyz-sc",
      "cpn":"4234576",
      "partDesc":"DYE",
      "qty":"1",
      "uom":"EA",
      "localQOH":20,
      "maps":"CRITICAL",
      "mcuStatus":"",
      "comments":"",
      "haz":"Y"
    },
    {
      "assignedTo":"MCU-PO",
      "loc":"ATL",
      "acNumber":"016",
      "fleet":"A319",
      "scheduledDate":"03/09/2017",
      "twDate":"06/06/2017",
      "mtx":"NEF-0162510E1",
      "cpn":"618886-109",
      "partDesc":"PLACARD",
      "qty":"A/R",
      "uom":"EA",
      "localQOH":5,
      "maps":"CRITICAL",
      "mcuStatus":"Ordered",
      "comments":"NOT AVAILABLE  PO 20046647",
      "haz":"Y"
    }
  ];
  @Output() onRowItemSelected = new EventEmitter<any>();
  fleets = ['A319','A321','B737','B757','B767','B777','B787','MD80'];
  fromDate="";toDate="";
  constructor() { }
  selectedRow = [];
  ngOnInit() {
    this.onRowItemSelected.emit(this.data[0]);
  }
  lookupRowStyleClass(item){
    if(item.mcuStatus == "Ordered")
      return "yellowRow";
    else
      return "clearRow";
  }
  onRowSelect(event)
  {
    this.onRowItemSelected.emit(event.data);
  }
}
