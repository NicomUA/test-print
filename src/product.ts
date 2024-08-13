export class Product {
  constructor(public name: string, public price: number) { }

  canPurchase(amount): boolean {
    return amount >= this.price;
  }
}