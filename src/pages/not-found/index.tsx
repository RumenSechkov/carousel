import React from 'react';
import Container from '@atoms/container';
import Text from '@atoms/text';
import './style.sass';

const NotFoundPage = () => (
  <Container id={'not-found-wrapper'}>
    <Text type={'h2'}>Page not found</Text>
    <Text type={'p'}>Please check the URL entered</Text>
  </Container>
);

export default NotFoundPage;
