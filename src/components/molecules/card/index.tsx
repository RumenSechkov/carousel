import React from 'react';
import { Props } from './types';
import Container from '@atoms/container';
import Image from '@atoms/image';
import Text from '@atoms/text';

const Card = ({ className, id, img, title, desc, children }: Props) => {
  return (
    <Container className={className} id={id}>
      {img && <Image {...img} />}
      {title && <Text {...title}>{title.text}</Text>}
      {desc && <Text {...desc}>{desc.text}</Text>}
      {children}
    </Container>
  );
};

export default Card;
