import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@state';
import Container from '@atoms/container';
import Card from '@molecules/card';
import { loadSlides, scrollSlider } from './helpers/slides';
import { handleEvent } from './helpers/handlers';
import { Props } from './types';
import './styles.sass';

const Carousel = ({ slidesCount = 20, preloadCount = 3 }: Props) => {
  const data = useSelector((state: RootState) => state.images.data);
  const bufferCount = Math.floor(slidesCount / 3);

  useEffect(() => {
    const carousel = document.getElementById('carousel');
    const slider = document.getElementById('slider');

    if (slider && carousel && data.length) {
      if (!slider.dataset.scrollWidth)
        loadSlides({ data, slider, total: slidesCount, prev: bufferCount + preloadCount });

      const slides = document.getElementsByClassName('image-wrapper');
      const scroll = (translateX: number) => {
        scrollSlider({
          data,
          carousel,
          slider,
          slides,
          slidesCount,
          bufferCount,
          preloadCount,
          translateX,
        });
      };
      const handle = (event: Event) => handleEvent({ event, carousel, slider, scroll });

      carousel.addEventListener('touchstart', handle);
      carousel.addEventListener('mousedown', handle);
      carousel.addEventListener('mousewheel', handle);
      return () => {
        carousel.removeEventListener('touchstart', handle);
        carousel.removeEventListener('mousedown', handle);
        carousel.removeEventListener('mousewheel', handle);
      };
    }
  }, [data]);

  return (
    <Container id={'carousel'} className={'image-carousel'}>
      <Container id={'slider'} className={'image-slider'}>
        <Card
          className={'image-wrapper'}
          img={{ className: 'image', loading: 'lazy' }}
          desc={{ className: 'image-desc', text: 'tEmplaTe' }}
        />
      </Container>
    </Container>
  );
};

export default Carousel;
