import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  ProductData:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  
  addProduct() {
    this.rest.addProduct(this.ProductData).subscribe((result) => {
      this.router.navigate(['/add/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }


}
