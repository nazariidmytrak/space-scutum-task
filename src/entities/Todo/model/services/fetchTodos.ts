import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { TodoSchema } from '../types/todo';

export const fetchTodos = createAsyncThunk<
  TodoSchema[],
  void,
  ThunkConfig<string>
>('todos/fetchTodos', async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data.slice(0, 50);
  } catch (error) {
    console.log(error);
    return rejectWithValue('An error occured while fetching the data');
  }
});
