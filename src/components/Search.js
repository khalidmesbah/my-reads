import { useEffect, useState } from 'react';
import { SearchBar, SearchResults } from './index';
import * as BooksApi from '../BooksAPI';
import { useSelector } from 'react-redux';

const Search = () => {
  const { books } = useSelector((s) => s);
  const [query, setQuery] = useState(localStorage?.getItem('query') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [resultingBooks, setResultingBooks] = useState([]);

  useEffect(() => {
    localStorage.setItem('query', query);
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
        book.shelf = books.find((b) => b.id === book.id)?.shelf || 'none';
      });
      setResultingBooks(res);
      setIsLoading(false);
    })();
    return () => {
      isCancelled = true;
    };
  }, [query]);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults resultingBooks={resultingBooks} isLoading={isLoading} />
    </div>
  );
};

export default Search;
