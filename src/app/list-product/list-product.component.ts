import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Array<IProduct> = [];

  constructor(private productService: ProductService) {
    this.showAllProduct();
  }


  ngOnInit(): void {
  }

  showAllProduct() {
    this.products = this.productService.getAllProduct();
  }

  delete(id: number) {
    this.productService.deleteProduct(id);
  }

}
