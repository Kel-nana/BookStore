import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const BookInput = () => {
  // State variables to store the book information
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting normally

    // Dispatches an action to add the book to the store
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
      category,
    }))
      // Once the book has been added, dispatches an action to add it to a list of new books
      .then(() => dispatch(addNewBook({
        item_id: uuidv4(),
        category,
        title,
        author,
      })));

    // Resets the input fields
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  // Render the book input form
  return (
    <div className="form-wrap">
      <h2 className="add-new-h2">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="title"
          id="title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select id="category" name="category" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)}>
          {/* Options for book categories */}
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Science-Fiction">Science Fiction</option>
        </select>
        {/* Button to add the book */}
        <button type="submit" className="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookInput;
