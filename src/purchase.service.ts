import { AmountService } from './amount.service';
import { ProductsService } from './products.service';

export class PurchaseService {
  constructor(private amountService: AmountService, private productService: ProductsService) { }

  purchaseProduct(productName: string) {
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
}