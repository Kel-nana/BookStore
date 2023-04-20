import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.allBooks.books);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const category = event.target.elements.category.value;
    const author = event.target.elements.author.value;
    const itemid = `item${books.length + 1}`;
    const percentage = '0%';
    const newBook = {
      itemid, title, author, category, percentage,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className="book-wrapper">
      <section className="books">
        {books.map((book) => (
          <div className="book-panel" key={book.itemid}>
            <div className={`book-card${book.title === 'Dune' ? ' dune-padding' : ''}`}>
              <div className="book-heading">
                <small className="school-of">{book.category}</small>
                <h3 className="title">{book.title}</h3>
                <span className="author">{book.author}</span>
              </div>
              <div className="actions">
                <button type="button" className="comments">
                  Comment
                </button>
                <button type="button" className="remove" onClick={() => dispatch(removeBook(book.itemid))}>
                  Remove
                </button>
                <button type="button" className="edit">
                  Edit
                </button>
              </div>
            </div>
            <div className="percentage-container">
              <div className="oval border" />
              <div className="percentage-complete">
                <span className="percentage">{book.percentage}</span>
                <span className="completed">Completed</span>
              </div>
            </div>
            <div>
              <div className="current-chapter">Current Chapter</div>
              <div className="chapter">Chapter 7</div>
              <button className="update-progress" type="button">
                Update Progress
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="form-container">
        <h3 className="addBook-title">ADD NEW BOOK</h3>
        <form id="add-book" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Book title" name="title" />
            <input type="text" placeholder="Author" name="author" />
            <div className="select-wrapper">
              <select className="select-category" name="category">
                <option value="Category" selected>
                  Category
                </option>
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>

                <option value="Economy">Economy</option>
              </select>
              <button type="submit">Add Book</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookList;
