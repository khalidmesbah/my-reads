import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as BooksAPI from '../../BooksAPI';

export const fetchInitialBooks = createAsyncThunk('books/fetchInitialBooks', async () => {
  const res = await BooksAPI.getAll();
  return res;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks: (books, action) => action.payload,
    switchShelf: (books, action) => {
      const { book, shelf } = action.payload;
      const oldBook = books.find((b) => b.id === book.id);
      if (oldBook) {
        oldBook.shelf = shelf;
      } else {
        books.push({ ...book, shelf });
      }
      BooksAPI.update(book, shelf);
    },
    deleteBook: (books, action) => books.filter((book) => book.id !== action.payload)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialBooks.fulfilled, (state, action) => action.payload);
  }
});

export const { setBooks, deleteBook, switchShelf } = booksSlice.actions;
export default booksSlice.reducer;
