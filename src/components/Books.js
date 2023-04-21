import BookList from './BookList';
import BookInput from './BookInput';

export default function Books() {
  return (
    <div>
      <BookList />
      <hr className="hr" />
      <br />
      <BookInput />
    </div>
  );
}
