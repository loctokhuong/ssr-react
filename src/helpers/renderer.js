import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import ClientRoutes from '../client/components/ClientRoutes';
import userReducer from '../client/slices/userSlice'

export const renderer = (req, res) => {
  const store = configureStore({ reducer: {users: userReducer} });

  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <ClientRoutes />
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
