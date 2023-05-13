import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import userReducer from '../client/slices/userSlice';
import { renderRoutes } from 'react-router-config';
import routes from '../client/routes';
import { StaticRouter } from 'react-router-dom';

export const renderer = (req, store) => {
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/usage/server-rendering#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
