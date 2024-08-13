import { ChangeOutput } from './service.type';

export class AmountService {
  private _amount: number = 0;
  private validCoins = [1, 2, 5, 10, 20, 50, '1e', '2e'];

  public increase(amount) {
    this.amount += amount;
  }

  public decrease(amount) {
    this.amount -= amount;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  insertCoin(input: number | string) {
    if (!this.validCoins.includes(input)) {
      throw Error('invalid coin')
    }

    if (Number.isInteger(input)) {
      this.increase(input);
    } else {
      const c = input[0];
      this.increase(+c * 100);
    }
  }

  calculateChangeCoins(): ChangeOutput {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let p = coins.length - 1;
    const result = {};

    // O(N)
    while (this.amount > 0) {
      if (this.amount < coins[p]) {
        p--;
      } else {
        this.amount -= coins[p];
        result[coins[p]] = (result[coins[p]] ?? 0) + 1;
      }

      if (this.amount === 0) break;
    }

    return result;
  }

} 