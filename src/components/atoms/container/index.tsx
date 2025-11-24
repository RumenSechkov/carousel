import React from 'react';
import { Props } from './types';

const Container = ({ className, id, children }: Props) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

export default Container;
