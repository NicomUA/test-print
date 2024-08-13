import { Product } from './product'

type productList = Record<string, Product>

export class ProductsService {
  private products: productList = {};

  public getProduct(productName: string): Product {
    return this.products[productName];
  }

  public hasProduct(productName) {
    return !!this.products[productName]
  }

  public addProduct(product) {
    if (this.hasProduct(product.name)) {
      throw Error('Product already exist');
    }

    this.products[product.name] = product;
  }

  public canPurchase(name: string, amount: number) {
    const product = this.getProduct(name);
    return product.canPurchase(amount);
  }

  public getProductList() {
    return Object.keys(this.products);
  }
}