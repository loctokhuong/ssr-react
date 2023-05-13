import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: { users: userReducer },
  preloadedState: window?.__PRELOADED_STATE__,
});
