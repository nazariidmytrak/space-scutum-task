import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchTodos } from '../../services/fetchTodos';
import { NewTodoSchema, TodoSchema, TodosSchema } from '../../types/todo';

const initialState: TodosSchema = {
  todos: [],
  error: undefined,
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 5,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<NewTodoSchema>) => {
      const newTodo: TodoSchema = {
        ...action.payload,
        userId: 'defaultUserId',
        completed: false,
      };
      state.todos = [newTodo, ...state.todos];
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<TodoSchema[]>) => {
          state.isLoading = false;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
