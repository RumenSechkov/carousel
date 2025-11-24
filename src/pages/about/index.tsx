import React from 'react';
import Container from '@atoms/container';
import Text from '@atoms/text';
import './style.sass';

const AboutPage = () => (
  <Container id={'about-wrapper'}>
    <Text type={'h3'}>About Page</Text>
    <Text type={'p'}>About this appp...</Text>
  </Container>
);

export default AboutPage;
