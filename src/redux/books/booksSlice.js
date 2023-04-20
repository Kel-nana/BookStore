import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemid: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      percentage: '64%',
    },
    {
      itemid: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      percentage: '8%',
    },
    {
      itemid: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      percentage: '0%',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const updatedBooks = state.books.filter((book) => book.itemid !== action.payload);
      return { ...state, books: updatedBooks };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
