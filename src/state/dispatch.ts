import { slices } from './slices';
import { store } from './store';
import { Actions, DispatchActions, Dispatches, Slices } from './types';

const createDispatches = (actions: Actions) =>
  (Object.keys(actions) as (keyof typeof actions)[]).reduce(
    (dispatches, key) => ({
      ...dispatches,
      [key]: (payload: any) => store.dispatch(actions[key](payload)),
    }),
    {} as DispatchActions,
  );

const dispatch = (Object.keys(slices) as (keyof typeof slices)[]).reduce(
  (dispatches, key: keyof Slices<keyof typeof slices>) => ({
    ...dispatches,
    [key]: createDispatches(slices[key].actions),
  }),
  {} as Dispatches,
);

export { dispatch };
