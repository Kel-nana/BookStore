import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunks to fetch, add and remove books
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rhUnsM6cwyZQF0pasdW4/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const result = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rhUnsM6cwyZQF0pasdW4/books', book);
  return result.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rhUnsM6cwyZQF0pasdW4/books/${id}`);
  return id;
});

// Define the initial state of the books slice
const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

// Define the books slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Add a new book to the state
    addNewBook: (state, action) => {
      const {
        // eslint-disable-next-line camelcase
        item_id, title, author, category,
      } = action.payload;
      state.books.push({
        // eslint-disable-next-line camelcase
        item_id, title, author, category,
      });
    },
  },
  extraReducers: (builder) => {
    // Handle the state changes for getBooks
    builder.addCase(getBooks.pending, (state) => ({ ...state, isLoading: true, error: false }));
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const books = action.payload;
      const newBooks = Object.keys(books).map((book) => ({
        item_id: book,
        title: books[book][0].title,
        author: books[book][0].author,
        category: books[book][0].category,
      }));
      return { ...state, books: newBooks, isLoading: false };
    });
    builder.addCase(getBooks.rejected, (state) => { state.isLoading = false; state.error = true; });

    // Handle the state changes for addBook
    builder.addCase(addBook.pending, (state) => ({ ...state, isLoading: true, error: false }));
    builder.addCase(addBook.fulfilled, (state) => ({ ...state, isLoading: false, error: false }));
    builder.addCase(addBook.rejected, (state) => { state.isLoading = false; state.error = true; });

    // Handle the state changes for removeBook
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.item_id !== id);
      state.error = false;
    });
    builder.addCase(removeBook.rejected, (state) => ({ ...state, error: true }));
  },
});

// Export the addNewBook action and the books reducer
export const { addNewBook } = booksSlice.actions;
export default booksSlice.reducer;
