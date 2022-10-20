import PropTypes from "prop-types";
import { Select } from "./index";
import { Link } from "react-router-dom";
const Book = ({ book, books, setBooks }) => {
  let mode = localStorage?.getItem("mode");
  console.log(mode);
  const { title, authors } = book;
  const thumbnail =
    book?.imageLinks?.thumbnail || "https://via.placeholder.com/140/200";

  return (
    <Link to={`/book/${book.id}`}>
      <div className="d-flex flex-column" style={{ width: "140px" }}>
        <div
          style={{
            position: "relative",
            height: "200px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            className="h-100 w-100 object-fit-cover"
            src={thumbnail}
            alt={title}
            style={{
              backgroundRepeat: "no-repeat",
            }}
          />
          <Select book={book} books={books} setBooks={setBooks} />
        </div>
        <div className={mode ? "text-white" : "text-black"}>{title}</div>
        <div className={mode ? "text-white-50" : "text-dark-50"}>
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
