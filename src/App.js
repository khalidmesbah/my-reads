import { useEffect } from 'react';
import {
  Search,
  Loader,
  BookDetails,
  NavBar,
  NotFound,
  SearchLink,
  Main
} from './components/index';
import * as BooksAPI from './BooksAPI';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useDispatch } from 'react-redux';
import { fetchInitialBooks } from './store/slices/booksSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  let isCancelled = false;
  const [renderApp, setRenderApp] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isCancelled) return;
    (async () => {
      setIsLoading(true);
      BooksAPI.headers.Authorization = localStorage.token;
      if (BooksAPI.headers.Authorization === 'undefined') {
        setIsNotFound(true);
        return;
      }
      setIsNotFound(false);
      await dispatch(fetchInitialBooks());
      setIsLoading(false);
    })();
    return () => {
      isCancelled = true;
    };
  }, [renderApp]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <NavBar setRenderApp={setRenderApp} />
      {isNotFound ? (
        <NotFound error="no users available" />
      ) : isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/book/:id" element={<BookDetails />}></Route>
        </Routes>
      )}
      <SearchLink />
    </div>
  );
}

export default App;
