import type { CounterSchema } from "./model/types/couterSchema";
import { counterReducer } from "./model/slice/counterSlice";
import { Counter } from "./ui/Counter";

export { CounterSchema, counterReducer, Counter }
