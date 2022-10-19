import PropTypes from "prop-types";
import { BookShelf } from "./index";

const BookShelves = ({ books, setBooks }) => {
  return (
    <div className="list-books-content">
      <BookShelf
        title="Currently Reading"
        books={books}
        setBooks={setBooks}
        name="currentlyReading"
      />
      <BookShelf
        title="Want to Read"
        books={books}
        setBooks={setBooks}
        name="wantToRead"
      />
      <BookShelf title="Read" setBooks={setBooks} books={books} name="read" />
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default BookShelves;
