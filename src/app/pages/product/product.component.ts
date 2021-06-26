import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from "ng2-redux";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @select() paintingProducts: any
  routeParam: any
  mySubscription: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mySubscription = this.route.paramMap.subscribe((params) => {
      this.routeParam = params.get('product')

    })
  }

}

// get data for products from redux store
// find the product with the the name matching the param
// save that product in the component

// unsusbscribe on destroy
