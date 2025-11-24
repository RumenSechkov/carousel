import React from 'react';
import { Props } from './types';

const Text = ({ className, id, type, children }: Props) => {
  switch (type) {
    case 'p':
      return (
        <p className={className} id={id}>
          {children}
        </p>
      );
    case 'h1':
      return (
        <h1 className={className} id={id}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} id={id}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} id={id}>
          {children}
        </h3>
      );
    default:
      return (
        <span className={className} id={id}>
          {children}
        </span>
      );
  }
};

export default Text;
