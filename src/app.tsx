import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './state/store';
import AppRouter from './router';
import './app.sass';

const InitApp = (rootComponentId?: string) => {
  if (rootComponentId) {
    const root = document.getElementById(rootComponentId);
    if (root) {
      createRoot(root).render(
        <ReduxProvider store={store}>
          <AppRouter />
        </ReduxProvider>,
      );
    } else {
      throw new Error('Root component not founnd!');
    }
  } else {
    throw new Error('Root component ID required!');
  }
};

export default InitApp;
