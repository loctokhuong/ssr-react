import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import ClientRoutes from '../client/components/ClientRoutes';

export const renderer = (req) => {
  let content = renderToString(
    <StaticRouter location={req.url}>
      <ClientRoutes />
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
