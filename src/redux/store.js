import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    allBooks: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
