import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPagedImages } from '@api-calls/images';
import { dispatch } from '@dispatch';
import { RootState } from '@state';
import Container from '@atoms/container';
import Text from '@atoms/text';
import Carousel from '@organisms/carousel';
import './styles.sass';

const ImagesPage = () => {
  const data = useSelector((state: RootState) => state.images.data);

  useEffect(() => {
    !data.length &&
      getPagedImages().then((data) => {
        if (data) (dispatch as any).images.setData(data);
      });
  }, [data]);

  return (
    <Container id={'images-page'}>
      <Text className={'images-title'} type={'h1'}>
        the infinite image carousel
      </Text>
      <Carousel />
    </Container>
  );
};

export default ImagesPage;
