import React from "react";
import { Book, Loader, NotFound } from "./index";
import PropTypes from "prop-types";
import Tilt from "react-tilt";

const SearchResults = ({
  resultingBooks,
  isLoading,
  isNotFound,
  books,
  setBooks,
}) => {
  return (
    <div className="search-books-results">
      {isLoading ? (
        <Loader />
      ) : isNotFound ? (
        <NotFound />
      ) : (
        <ol className="books-grid">
          {resultingBooks.map((book) => (
            <Tilt
              key={book.id}
              options={{
                reset: true,
                speed: 500,
                transition: true,
                scale: 1.1,
              }}
            >
              <li key={book.id}>
                <Book book={book} books={books} setBooks={setBooks} />
              </li>
            </Tilt>
          ))}
        </ol>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default SearchResults;
