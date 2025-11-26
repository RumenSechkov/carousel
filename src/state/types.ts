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
type SubTypes<T extends Record<string, unknown>> = {
  [K in keyof T]: {
    [P in keyof T[K]]: Dispatch<any>;
  };
};
type Flatten<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type StateTypes = Types<InitialState>;
type ManageState = Record<string, CaseReducer<StateTypes, PayloadAction<any>>>;

type Actions = CaseReducerActions<ManageState, keyof Reducers>;
type DispatchActions<T = Dispatches> = Flatten<T>;
type Dispatches = SubTypes<Reducers>;

type Slices<T extends string> = Record<
  T,
  Slice<StateTypes, ManageState, T, T, SliceSelectors<StateTypes>>
>;

export { InitialState, ManageState, Actions, DispatchActions, Dispatches, Slices };
