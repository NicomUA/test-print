import { WendingMachine } from './machine';
import { Product } from './product';

export function main() {
  const machine = new WendingMachine();

  const productA = new Product('A', 95);
  const productB = new Product('B', 123);
  const productC = new Product('C', 256);

  machine.addProduct(productA);
  machine.addProduct(productB);
  machine.addProduct(productC);

  machine.insertCoin('1e');
  machine.insertCoin('1e');
  machine.insertCoin('1e');
  machine.insertCoin(50);

  machine.purchaseProduct('A');

  const change = machine.getExchange();
  return change;
}


const result = main();

console.log(result);








