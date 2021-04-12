import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {formatI18nPlaceholderName} from '@angular/compiler/src/render3/view/i18n/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Array<IProduct> = [
    {
      id: 1,
      name: 'Iphone',
      description: 'Hang xin'
    },
    {
      id: 2,
      name: 'Iphone2',
      description: 'Hang xin xin'
    },
    {
      id: 3,
      name: 'Iphone3',
      description: 'Hang xin vua'
    },
    {
      id: 4,
      name: 'Iphone4',
      description: 'Hang xin lam'
    },
  ];

  getAllProduct(): Array<IProduct> {
    return this.productList;
  }

  getProductById(id: number): IProduct {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        return this.productList[i];
      }
    }
    return null;
  }

  addNewProduct(product: IProduct) {
    // console.log("call addNewProduct")
    let id = 0;

    for (let i = 0; i < this.productList.length; i++) {
      let max = 0;
      if (this.productList[i].id >= max) {
        max = this.productList[i].id;
        id = max + 1;
      }
    }
      product.id = id;
      this.productList.push(product);
    }

  updateProduct(product: IProduct): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == product.id) {
        this.productList[i] = product;
      }
    }

  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);

      }
    }
  }

  constructor() {
  }
}
