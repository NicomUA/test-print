import { AmountService } from './amount.service';
import { ProductsService } from './products.service';
import { PurchaseService } from './purchase.service';
import { convertCoins } from './util';


export function main() {
  const amountService = new AmountService();
  const productService = new ProductsService();

  const service = new PurchaseService(amountService, productService);

  amountService.insertCoin('1e');
  amountService.insertCoin('1e');
  amountService.insertCoin('1e');
  amountService.insertCoin(50);
  service.purchaseProduct('A');

  const result = amountService.calculateChangeCoins();
  return convertCoins(result);
}

main();








