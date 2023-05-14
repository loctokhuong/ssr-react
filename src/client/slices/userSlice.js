import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { extra: api }) => {
    const response = await api.get('/users');
    return response.data;
  }
);
