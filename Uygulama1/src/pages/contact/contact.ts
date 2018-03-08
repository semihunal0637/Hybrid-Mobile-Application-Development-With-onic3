import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../providers/product.service';

import { Product } from '../../entities/product';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ProductService]
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
    this.getProducts();
  }
  products:Product[];
 
  getProducts(){
    this.productService.getProducts().subscribe(p=>{
      this.products=p
    }) 
  }
}
