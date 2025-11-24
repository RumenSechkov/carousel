import React from 'react';
import { Props } from './types';
import './styles.sass';

const MainLayout = ({ children }: Props) => {
  return (
    <div className='main-layout'>
      {/* {navigation && <Navigation {...navigation} />} */}
      {children}
      {/* {footer && <Footer {...footer} />} */}
    </div>
  );
};

export default MainLayout;
