import { Product } from './product';
import { ProductsService } from './products.service'


describe('ProductsService:', () => {
  let service: ProductsService;

  beforeEach((() => {
    service = new ProductsService();
  }))

  describe('Positive flow:', () => {
    it('should return products list', () => {
      const result = service.getProductList();
      expect(result).toEqual(['A', 'B', 'C']);
    })

    it('should return product if exist', () => {
      const result = service.getProduct('A');
      expect(result).toBeInstanceOf(Product);
    })

    it('should check if product available', () => {
      const result = service.hasProduct('A');
      expect(result).toBeTruthy();
    })

    it('should check if product can be purchased', () => {
      const result = service.canPurchase('A', 100);
      expect(result).toBeTruthy();
    })
  })
});

