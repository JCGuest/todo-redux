import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoReducer';

export default configureStore({
  reducer: {
    todos: todoReducer
  }
});
