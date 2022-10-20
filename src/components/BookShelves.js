import PropTypes from 'prop-types';
import { BookShelf } from './index';

const BookShelves = ({ books, setBooks }) => {
  return (
    <div className="p-3 d-flex gap-5 flex-wrap flex-grow-1">
      <BookShelf title="Want to Read" books={books} setBooks={setBooks} name="wantToRead" />
      <BookShelf
        title="Currently Reading"
        books={books}
        setBooks={setBooks}
        name="currentlyReading"
      />
      <BookShelf title="Read" setBooks={setBooks} books={books} name="read" />
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired
};

export default BookShelves;
