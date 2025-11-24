import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { Slices, ManageState } from './types';

export const slices: Slices<keyof typeof reducers> = (
  Object.keys(reducers) as (keyof typeof reducers)[]
).reduce(
  (slices, key) =>
    Object.assign(slices, {
      [key]: createSlice({
        name: key,
        initialState: reducers[key].initialState,
        reducers: reducers[key].manageState as ManageState,
      }),
    }),
  {} as Slices<keyof typeof reducers>,
);
