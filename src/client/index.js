import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ClientRoutes from './components/ClientRoutes';

const root = hydrateRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ClientRoutes />
  </BrowserRouter>
);
