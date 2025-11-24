import { Dispatch } from 'redux';
import {
  CaseReducer,
  CaseReducerActions,
  PayloadAction,
  Slice,
  SliceSelectors,
} from '@reduxjs/toolkit';
import { InitialState, Reducers } from '@types-reducers';

type Types<T extends Record<string, unknown>> = T[keyof T];
type SubTypes<T> = {
  [K in keyof T]: {
    [P in keyof T[K]]?: Dispatch<any>;
  };
};

type StateTypes = Types<InitialState>;

type Dispatches = SubTypes<Reducers>;

type ManageState = Record<string, CaseReducer<StateTypes, PayloadAction<any>>>;

type Actions = CaseReducerActions<ManageState, string>;

type Slices<T extends string> = Record<
  T,
  Slice<StateTypes, ManageState, T, T, SliceSelectors<StateTypes>>
>;

export { InitialState, ManageState, Actions, Slices, Dispatches };
