import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  UserData:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.UserData = [];
    this.rest.getUser().subscribe((data: {}) => {
      this.UserData = data;
      console.log(data);
      
    });
  }
}

