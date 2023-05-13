import express from 'express';
import { renderer } from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './client/slices/userSlice';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = configureStore({ reducer: { users: userReducer } });

  const matchedRoute = matchRoutes(routes, req.path);

  const promises = matchedRoute.map(({ route }) => {
    return route.fetchData ? route.fetchData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
