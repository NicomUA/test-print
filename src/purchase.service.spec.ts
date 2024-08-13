import { AmountService } from './amount.service';
import { Product } from './product';
import { ProductsService } from './products.service';
import { PurchaseService } from './purchase.service'


describe('Purchase Service:', () => {
  let service: PurchaseService;
  let amountService: AmountService;
  let productService: ProductsService;

  beforeEach((() => {
    amountService = new AmountService();
    productService = new ProductsService();
    service = new PurchaseService(amountService, productService);
  }))

  describe('Negative flow:', () => {
    it('Should validate if product exist', () => {
      expect(() => service.purchaseProduct('D')).toThrow('Selected product not available')
    })

    it('Should validate if user insert enough money', () => {
      amountService.insertCoin(50);
      expect(() => service.purchaseProduct('A')).toThrow('Amount is too low');
    })
  })

  describe('Positive flow:', () => {
    it('should purchase product', () => {
      amountService.insertCoin('1e');
      const result = service.purchaseProduct('A');

      expect(result).toBeInstanceOf(Product);
      expect(result).toStrictEqual(new Product('A', 95));
    })

    it('should calculate change', () => {
      amountService.insertCoin('1e');
      service.purchaseProduct('A');

      const change = amountService.calculateChangeCoins();

      expect(change).toEqual({
        '5': 1,
      });
    })
  })
})