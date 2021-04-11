import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private  productService: ProductService) {
  }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.addNewProduct(this.product);
    this.router.navigate(['/']);
  }

}
