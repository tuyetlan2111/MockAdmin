import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
     this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
