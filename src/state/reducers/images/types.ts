import { PagedImage } from '@types-api-calls/images';
import { ReducerAction } from '@types-reducers';

type Image = PagedImage;

type State = {
  data: Image[];
  show: [number, number];
};

type Reducer = {
  setData: ReducerAction<State, Image[]>;
};

export { State, Reducer, Image };
