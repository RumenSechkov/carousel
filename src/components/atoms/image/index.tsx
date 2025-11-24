import React from 'react';
import { Props } from './types';

const Image = ({ className, id, src, alt, loading }: Props) => {
  return <img className={className} id={id} src={src} alt={alt} loading={loading} />;
};

export default Image;
