import { Book } from "./index";
import * as BooksAPI from "../BooksAPI";
import Tilt from "react-tilt";

const BookShelf = ({ title, books, name, setBooks }) => {
  const update = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    book.shelf = shelf;
    const oldBooks = books.filter((b) => b.id !== book.id);
    setBooks([...oldBooks, book]);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol
          className="books-grid"
          name={name}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const shelf = e.currentTarget.getAttribute("name");
            let book = JSON.parse(e.dataTransfer.getData("book"));
            update(book, shelf);
          }}
        >
          {books
            .filter((book) => book.shelf === name)
            .map((book) => (
              <Tilt
                key={book.id}
                options={{
                  reset: true,
                  speed: 500,
                  transition: true,
                  scale: 1.1,
                }}
              >
                <li
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData(`book`, JSON.stringify(book));
                  }}
                >
                  <Book book={book} books={books} setBooks={setBooks} />
                </li>
              </Tilt>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
