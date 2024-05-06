import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.incremented())
  }

  const decrement = () => {
    dispatch(counterActions.decremented())
  }
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button data-testid="increment-btn" onClick={increment}>
        increment
      </button>
      <button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </button>
    </div>
  )
}

