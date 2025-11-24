import { Image } from '@types-reducers/images';

type Props = {
  slidesCount?: number;
  preloadCount?: number;
};

type PropsMove = {
  data: Image[];
  slider: HTMLElement;
  slides: HTMLCollectionOf<Element>;
  total: number;
  type: 'prev' | 'next';
};

type PropsLoad = {
  data: Image[];
  slider: HTMLElement;
  total: number;
  prev: number;
};

type PropsScroll = {
  data: Image[];
  carousel: HTMLElement;
  slider: HTMLElement;
  slides: HTMLCollectionOf<Element>;
  slidesCount: number;
  bufferCount: number;
  preloadCount: number;
  translateX: number;
};

type PropsHandle = {
  event: Event;
  carousel: HTMLElement;
  slider: HTMLElement;
  scroll: (translateX: number) => void;
};

export { Props, PropsMove, PropsLoad, PropsScroll, PropsHandle, Image };
