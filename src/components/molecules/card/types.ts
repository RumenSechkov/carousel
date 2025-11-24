import { ReactNode } from 'react';
import { Props as ImgProps } from '@atoms/image/types';
import { Props as TxtProps } from '@atoms/text/types';

type Props = {
  className?: string;
  id?: string;
  img?: ImgProps;
  title?: TxtProps & { text: string };
  desc?: TxtProps & { text: string };
  children?: ReactNode;
};

export { Props };
