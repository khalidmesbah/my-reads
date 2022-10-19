import PropTypes from "prop-types";
import { Select } from "./index";
import { Link } from "react-router-dom";
const Book = ({ book, books, setBooks }) => {
  const { title, authors } = book;
  const thumbnail =
    book?.imageLinks?.thumbnail || "https://via.placeholder.com/140/200";

  return (
    <Link to={`/book/${book.id}`}>
      <div className="book">
        <div className="book-top">
          <img className="book-cover" src={thumbnail} alt={title} />
          <Select book={book} books={books} setBooks={setBooks} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {Array.isArray(authors) ? authors.join(" | ") : authors}
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Book;
