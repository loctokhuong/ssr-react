import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ClientRoutes from './components/ClientRoutes';
import store from './store';

delete window.__PRELOADED_STATE__;

const root = hydrateRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ClientRoutes />
    </BrowserRouter>
  </Provider>
);
