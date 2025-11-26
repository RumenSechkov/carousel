import { State, Reducer } from './types';

const initialState: State = {
  data: [],
};

const manageState: Reducer = {
  setData: (state, action) => {
    state.data = action.payload;
  },
};

export default { initialState, manageState };
