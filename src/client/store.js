import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import axios from 'axios';

const clientAxios = axios.create({
  baseURL: '/api',
});

export default configureStore({
  reducer: { users: userReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: clientAxios,
      },
      serializableCheck: false,
    });
  },
  preloadedState: window.__PRELOADED_STATE__,
});
