import { AmountService } from './amount.service';
import { Product } from './product';
import { ProductsService } from './products.service';
import { ConvertOutput } from './service.type';
import { convertCoins } from './util';

export class WendingMachine {
  private amountService: AmountService
  private productService: ProductsService;

  constructor() {
    this.amountService = new AmountService()
    this.productService = new ProductsService();
  }

  public insertCoin(coin: string | number): void {
    this.amountService.insertCoin(coin);
  }

  public addProduct(product: Product): void {
    this.productService.addProduct(product);
  }

  public purchaseProduct(productName: string): Product {
    const product = this.productService.getProduct(productName);

    if (!product) {
      throw Error('Selected product not available');
    }

    if (!this.productService.canPurchase(product.name, this.amountService.amount)) {
      throw Error('Amount is too low');
    }

    this.amountService.decrease(product.price);

    return product;
  }

  public getExchange(): ConvertOutput {
    const change = this.amountService.calculateChangeCoins();
    return convertCoins(change);
  }
}