/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
const GET_RANDOM_MESSAGE = 'get/message';

export const getRandomMessage = createAsyncThunk(GET_RANDOM_MESSAGE, async () => {
  try {
    const { data } = await axios.get(`${baseURL}/greeting-messages`);
    return data;
  } catch (error) {
    return error.response.data;
  }
});
