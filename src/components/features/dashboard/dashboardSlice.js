import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from '../data/data'; // Adjust the import path as necessary

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const apidata = await new Promise((resolve) => {
    setTimeout(() => {
        console.log(data,"mock")
      resolve(data);
    }, 1000); 
  });
  return apidata;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
