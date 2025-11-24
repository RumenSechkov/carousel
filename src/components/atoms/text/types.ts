import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
  id?: string;
  type?: 'p' | 'h1' | 'h2' | 'h3';
};

export { Props };
