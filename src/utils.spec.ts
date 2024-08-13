import { convertCoins } from './util';

describe('Utils:', () => {
  describe('convertCoins:', () => {
    it('should convert', () => {
      const result = convertCoins({ 100: 2, 200: 1, 50: 1 });
      expect(result).toEqual({
        '1e': 2,
        "2e": 1,
        50: 1
      });
    })
  })
})