import { main } from './app'

describe('main', () => {

  it('should do full flow', () => {

    const result = main();
    expect(result).toEqual({
      '2e': 1,
      '5': 1,
      '50': 1
    })
  })
})