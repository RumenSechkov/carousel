import { PropsMove, PropsLoad, PropsScroll, Image } from '../types';

const getIndex = (index: number, length: number, type?: 'next' | 'prev') =>
  type === 'prev' ? (index - 1 >= 0 ? index - 1 : length - 1) : index + 1 < length ? index + 1 : 0;

const setSlide = (data: Image[], slide: Element, index: number) => {
  const { download_url, author } = data[index];
  const img = slide.getElementsByTagName('img')[0];
  const desc = slide.getElementsByTagName('span')[0];

  desc.innerHTML = `by ${author}`;
  img.setAttribute('src', download_url);
  img.setAttribute('alt', `Image by ${author}`);
  slide.setAttribute('data-index', index.toString());
  return slide;
};

const moveSlide = ({ data, slider, slides, total, type }: PropsMove) => {
  const { dataset, style } = slider;
  const isPrev = type === 'prev';
  const dataIndex = Number(slides[isPrev ? 0 : slides.length - 1].getAttribute('data-index'));
  const translateXShift: number =
    Number(dataset.scrollTranslateX) + (Number(dataset.scrollWidth) / total) * (isPrev ? -1 : 1);

  slider[isPrev ? 'prepend' : 'append'](
    setSlide(data, slides[isPrev ? slides.length - 1 : 0], getIndex(dataIndex, data.length, type)),
  );
  style.transform = `translateX(${translateXShift}px)`;
  dataset.scrollTranslateX = translateXShift.toString();
};

const scrollSlider = ({
  data,
  carousel,
  slider,
  slides,
  slidesCount,
  bufferCount,
  preloadCount,
  translateX,
}: PropsScroll) => {
  const { dataset, style } = slider;
  style.transform = `translateX(${translateX}px)`;
  dataset.scrollTranslateX = translateX.toString();

  const bufferWidth = (Number(dataset.scrollWidth) / slidesCount) * bufferCount;
  const translateXMin = -(Number(dataset.scrollWidth) - (bufferWidth + carousel.clientWidth));
  const translateXMax = -bufferWidth;

  if (translateXMax < translateX || translateXMin > translateX) {
    const type = translateXMax < translateX ? 'prev' : 'next';
    for (let i = 0; i < preloadCount; i++) {
      moveSlide({ data, slider, slides, total: slidesCount, type });
    }
  }
};

const loadSlides = ({ data, slider, total, prev }: PropsLoad) => {
  const template = slider.children[0];
  template.remove();

  for (let i = -(prev + 1); i < total - (prev + 1); i++) {
    const index = i < 0 ? data.length + i : i;
    slider.append(
      setSlide(data, template.cloneNode(true) as Element, getIndex(index, data.length)),
    );
  }

  const { scrollWidth, dataset, style } = slider;
  const translateX = -(prev * (scrollWidth / total));

  style.transform = `translateX(${translateX}px)`;
  dataset.scrollTranslateX = translateX.toString();
  dataset.scrollWidth = scrollWidth.toString();
};

export { loadSlides, scrollSlider };
