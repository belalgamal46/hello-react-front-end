import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingMessage/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
