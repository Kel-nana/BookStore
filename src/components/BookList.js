import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const BookList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>please wait it is loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching books</p>;
  }
  return (
    <div className="book-wrap">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <ul className="list">
            <li className="book-category">{book.category}</li>
            <li className="book-title">{book.title}</li>
            <div className="chapter-wrap">
              <div className="chapter-info">
                <h3 className="current-chap">CURRENT CHAPTER</h3>
                <h3 className="chapterno">Chapter 17</h3>
                <button type="button" className="update-btn">UPDATE PROGRESS</button>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress">
                <CircularProgressbar className="progress-bar" value={70} />
              </div>
              <div className="percentage">
                <h3 style={{ margin: '0.063rem 0 0 0.688rem', fontSize: '2rem' }}>64%</h3>
                <p style={{
                  margin: '0.438rem 0 0.75rem 0.75rem', opacity: '0.5', fontSize: '0.875rem', color: '121212',
                }}
                >
                  Completed
                </p>
                <span className="left-line2" />
              </div>
            </div>
            <li className="book-author">
              {book.author}
              <br />
              <button type="button" className="remove comment">Comment</button>
              <span>|</span>
              <button
                type="button"
                className="remove"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                }}
              >
                Remove
              </button>
              <span>|</span>
              <button type="button" className="remove edit">Edit</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookList;
