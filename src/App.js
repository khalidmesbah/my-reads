import { useEffect, useState } from 'react';
import { Main, Search, Loader, BookDetails, NavBar, NotFound } from './components/index';
import * as BooksAPI from './BooksAPI';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserChanged, setHasUserChanged] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  useEffect(() => {
    let isCancelled = false;
    (async () => {
      setIsLoading(true);
      BooksAPI.headers.Authorization = localStorage.token;
      if (BooksAPI.headers.Authorization === 'undefined') {
        setIsNotFound(true);
        return;
      }
      setIsNotFound(false);
      const res = await BooksAPI.getAll();
      if (isCancelled) return;
      setIsLoading(false);
      setBooks(res);
    })();
    return () => {
      isCancelled = true;
      setIsLoading(false);
    };
  }, [hasUserChanged]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <NavBar setHasUserChanged={setHasUserChanged} />
      {isNotFound ? (
        <NotFound />
      ) : books.length > 0 && !isLoading ? (
        <div className="d-flex flex-grow-1">
          <Routes>
            <Route path="/" element={<Main books={books} setBooks={setBooks} />}></Route>
            <Route path="/search" element={<Search books={books} setBooks={setBooks} />}></Route>
            <Route path="/book/:id" element={<BookDetails />}></Route>
          </Routes>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
