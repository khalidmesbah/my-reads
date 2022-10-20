import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { SearchBar, SearchResults } from "../components/index";
import * as BooksApi from "../BooksAPI";

const Search = ({ books, setBooks }) => {
  const [query, setQuery] = useState(localStorage?.getItem("query") || "");
  const [isLoading, setIsLoading] = useState(false);
  const [resultingBooks, setResultingBooks] = useState([]);

  useEffect(() => {
    localStorage.setItem("query", query);

    setIsLoading(true);
    let isCancelled = false;
    if (!query) {
      setIsLoading(false);
      setResultingBooks([]);
      return;
    }
    (async () => {
      const res = await BooksApi.search(query);
      if (!Array.isArray(res)) {
        setIsLoading(false);
        setResultingBooks([]);
        return;
      }
      if (isCancelled) return;

      res.forEach((book) => {
        book.shelf = books.find((b) => b.id === book.id)?.shelf || "none";
      });
      setResultingBooks(res);
      setIsLoading(false);
    })();
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="w-100 d-flex flex-column">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults
        resultingBooks={resultingBooks}
        isLoading={isLoading}
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
