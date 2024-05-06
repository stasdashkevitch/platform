import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/couterSchema";

describe('counterSlice test', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(
      counterReducer(state as CounterSchema, counterActions.decremented())
    ).toEqual({ value: 9 })
  })

  test('increment', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(
      counterReducer(state as CounterSchema, counterActions.incremented())
    ).toEqual({ value: 11 })
  })
})
