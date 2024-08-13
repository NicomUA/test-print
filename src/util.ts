import { ChangeOutput, ConvertOutput } from './service.type';


export function convertCoins(coins: ChangeOutput): ConvertOutput {
  const result = {}

  for (const [key, value] of Object.entries(coins)) {
    if (+key < 100) {
      result[key] = value;
    }
    else {
      const newKey = `${Math.floor(+key / 100)}e`;
      result[newKey] = value;
    }
  }

  return result;
}
