import { AmountService } from './amount.service'

describe('AmountService:', () => {
  let service: AmountService;

  beforeEach(() => {
    service = new AmountService();
  })

  it('should validate coins', () => {
    expect(() => service.insertCoin('3e')).toThrow('invalid coin')
  })

  it('should add coin', () => {
    expect(service.amount).toBe(0);
    service.insertCoin(50);
    expect(service.amount).toBe(50);
  })

  it('should add euro', () => {
    expect(service.amount).toBe(0);
    service.insertCoin('2e');
    expect(service.amount).toBe(200);
  })
})