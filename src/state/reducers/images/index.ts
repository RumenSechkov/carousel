import { State, Reducer } from './types';

const initialState: State = {
  data: [],
  show: [0, 3],
};

const manageState: Reducer = {
  setData: (state, action) => {
    state.data = action.payload;
  },
};

export default { initialState, manageState };
