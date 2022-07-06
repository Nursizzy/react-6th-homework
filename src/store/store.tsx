import { configureStore } from '@reduxjs/toolkit';
import todoslistSlice from './todoslistSlice';
import { todosListFetch } from '../services/services';

export const Store = configureStore({
  reducer: {
    todos: todoslistSlice,
  },
});

Store.dispatch(todosListFetch());
