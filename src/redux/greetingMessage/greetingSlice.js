import { createSlice } from '@reduxjs/toolkit';
import { getRandomMessage } from './greetingApi';

const initialState = {
  greetingMessage: {},
  isLoading: false,
  error: {},
};

export const greetingSlice = createSlice({
  name: 'greetingMessage',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRandomMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomMessage.fulfilled, (state, { payload }) => {
        if (payload.errorMessage) {
          state.error = payload;
          state.isLoading = false;
          return;
        }
        state.greetingMessage = payload;
        state.isLoading = false;
      })
      .addCase(getRandomMessage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default greetingSlice.reducer;
