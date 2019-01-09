import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
     this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
