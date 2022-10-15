import { useEffect, useState } from "react";
import { AnchorLink, Book, Loader, NotFound } from "../index";
import Tilt from "react-tilt";
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
      <div className="search-books-bar">
        <AnchorLink type="main" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onInput={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
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
    </div>
  );
};

export default Search;
