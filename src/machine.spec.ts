import { WendingMachine } from './machine'
import { Product } from './product';


describe('WendingMachina:', () => {
  let wm: WendingMachine

  beforeEach(() => {
    wm = new WendingMachine();
  })


  describe('Positive flow:', () => {
    it('should purchase product and return change', () => {
      const productA = new Product('A', 95);

      wm.addProduct(productA);
      wm.insertCoin('1e');

      const product = wm.purchaseProduct('A');
      const change = wm.getExchange();

      expect(product).toBeInstanceOf(Product);
      expect(product).toEqual(productA);

      expect(change).toEqual({
        '5': 1,
      })
    });
  });

  describe('Negative flow:', () => {
    it('should throw if product not available', () => {
      expect(() => wm.purchaseProduct('A')).toThrow('Selected product not available')
    })

    it('should throw if inserted amount to low', () => {
      const productA = new Product('A', 95);

      wm.addProduct(productA);
      wm.insertCoin(50);

      expect(() => wm.purchaseProduct('A')).toThrow('Amount is too low')
    })

    it('should throw if product already in machine', () => {
      const productA = new Product('A', 95);
      wm.addProduct(productA);

      expect(() => wm.addProduct(productA)).toThrow('Product already exist')
    })

    it('should throw if wrong coin inserted', () => {
      expect(() => wm.insertCoin('5e')).toThrow('invalid coin')
    })
  })
});