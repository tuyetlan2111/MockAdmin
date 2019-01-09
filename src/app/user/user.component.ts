import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit(): void {
     this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
