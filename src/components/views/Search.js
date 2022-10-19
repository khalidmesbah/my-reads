import { useEffect, useState } from "react";
import { SearchBar, SearchResults } from "../index";
import PropTypes from "prop-types";
import * as BooksApi from "../../BooksAPI";
const Search = ({ books, setBooks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [resultingBooks, setResultingBooks] = useState([]);
  const [isNotFound, setIsNotFound] = useState(true);
  useEffect(() => {
    if (!query) {
      setResultingBooks([]);
      setIsNotFound(true);
      return;
    }
    (async () => {
      setIsLoading(true);
      const res = await BooksApi.search(query);
      setIsLoading(false);
      if (!Array.isArray(res)) {
        setResultingBooks([]);
        setIsNotFound(true);
        return;
      }
      setIsNotFound(false);
      res.forEach((book) => {
        books.forEach((b) => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
        });
      });
      setResultingBooks(res);
    })();
  }, [query, books]);

  return (
    <div className="search-books">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults
        resultingBooks={resultingBooks}
        isLoading={isLoading}
        isNotFound={isNotFound}
        books={books}
        setBooks={setBooks}
      />
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Search;
