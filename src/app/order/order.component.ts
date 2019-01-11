import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  OrderData:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('dataTable') table;
  dataTable: any;

  ngOnInit(){
   this.getOrder();
     this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

  getOrder(){
    this.OrderData = [];
    this.rest.getOrder().subscribe((data: {}) => {
      this.OrderData = data;
      console.log(data);
  });
  }

}
