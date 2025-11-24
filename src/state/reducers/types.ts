import { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import * as Images from './images/types';

type InitialState = { images: Images.State };
type Reducers = { images: Images.Reducer };

type ReducerAction<S, P, T extends string = string> = CaseReducer<S, PayloadAction<P, T>>;

export { InitialState, Reducers, ReducerAction };
