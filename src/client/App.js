import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
  return (
    <div>
      <h1>App</h1>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App,
};
