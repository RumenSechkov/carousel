import { slices } from './slices';
import { store } from './store';
import { Actions, Slices, Dispatches } from './types';

const createDispatches = (actions: Actions) =>
  Object.keys(actions).reduce(
    (dispatches, key: keyof Actions) => ({
      ...dispatches,
      [key]: (payload: unknown) => store.dispatch(actions[key](payload)),
    }),
    {},
  );

const dispatch = (Object.keys(slices) as (keyof typeof slices)[]).reduce(
  (dispatches, key: keyof Slices<keyof typeof slices>) => ({
    ...dispatches,
    [key]: createDispatches(slices[key].actions),
  }),
  {} as Dispatches,
);

export { dispatch };
