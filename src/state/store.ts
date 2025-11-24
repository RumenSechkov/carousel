import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { slices } from './slices';
import { InitialState, Slices } from './types';

export const store = configureStore({
  reducer: combineReducers(
    (Object.keys(slices) as (keyof typeof slices)[]).reduce(
      (reducers, key: keyof Slices<keyof typeof slices>) => ({
        ...reducers,
        [key]: slices[key].reducer,
      }),
      {},
    ),
  ),
});

export type RootState = InitialState;
