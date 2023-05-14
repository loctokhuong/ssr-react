import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://react-ssr-api.herokuapp.com';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    status: '',
    error: '',
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(BASE_URL + '/users');
  return response.data;
});
