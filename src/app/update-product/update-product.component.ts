import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  sub: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private productService: ProductService,
              private activatedRouter: ActivatedRoute) {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  edit() {
    this.productService.updateProduct(this.product);
    this.router.navigate(['/']);
  }

  getProduct(id: number) {
    this.product = this.productService.getProductById(id);
  }

}
