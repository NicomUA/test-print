import { Product } from './product'


export class ProductsService {
  private products = {
    'A': new Product('A', 95),
    'B': new Product('B', 123),
    'C': new Product('C', 256),
  };

  public getProduct(productName: string): Product {
    return this.products[productName];
  }

  public hasProduct(productName) {
    return !!this.products[productName]
  }

  public canPurchase(name: string, amount: number) {
    const product = this.getProduct(name);
    return product.canPurchase(amount);
  }

  public getProductList() {
    return Object.keys(this.products);
  }
}