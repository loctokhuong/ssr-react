import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import store from './store';
import routes from './routes';

delete window.__PRELOADED_STATE__;

const root = hydrateRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>
);
