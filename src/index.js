import express from 'express';
import { renderer } from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './client/slices/userSlice';
import proxy from 'express-http-proxy';
import axios from 'axios';
// import cookieParser from 'cookie-parser';

const app = express();

app.use(
  '/api',
  proxy('https://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  })
);
// app.use(cookieParser());
app.use(express.static('public'));

app.get('*', (req, res) => {
  const serverAxios = axios.create({
    baseURL: 'https://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || '',
    },
  });

  const store = configureStore({
    reducer: { users: userReducer },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: serverAxios,
        },
        serializableCheck: false,
      });
    },
  });

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
