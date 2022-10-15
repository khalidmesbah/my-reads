import "./App.css";
import { useEffect, useState } from "react";
import { Main, Search, Loader, BookDetails } from "./components/index";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      setBooks(await BooksAPI.getAll());
    })();
  }, []);
  return (
    <div className="app">
      {books.length >= 0 ? (
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Main books={books} setBooks={setBooks} />}
            ></Route>
            <Route
              path="/search"
              element={<Search books={books} setBooks={setBooks} />}
            ></Route>
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
