import { StateSchema } from "app/providers/StoreProvider"
import { getCounterValue } from "./getCounterValue";

type DeepPartial<T>
  = T extends object ?
  {
    [P in keyof T]?: DeepPartial<T[P]>;
  } : T;

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
