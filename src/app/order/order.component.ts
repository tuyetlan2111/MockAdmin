import { Component, OnInit, ViewChild} from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
     this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
