import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  ProductData:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
    //   console.log(data);
    //   this.ProductData = data;
    // });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.ProductData).subscribe((result) => {
      this.router.navigate(['update/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }
}
