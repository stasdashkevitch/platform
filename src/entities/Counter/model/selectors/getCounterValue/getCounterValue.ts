import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/couterSchema";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value 
)
