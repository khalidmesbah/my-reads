import PropTypes from 'prop-types';
import { Book } from './index';
import * as BooksAPI from '../BooksAPI';
import Tilt from 'react-tilt';

const BookShelf = ({ name, title, books, setBooks }) => {
  const update = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const oldBooks = books.filter((b) => b.id !== book.id);
    book.shelf = shelf;
    setBooks([...oldBooks, book]);
  };

  return (
    <div
      className="bg-success d-flex flex-column flex-grow-1"
      style={{ minWidth: '200px', minHeight: '300px' }}>
      <h2 className="text-center">{title}</h2>
      <div className="h-100">
        <ol
          className="h-100 d-flex justify-content-center flex-wrap align-items-start gap-3 p-3"
          style={{
            listStyleType: 'none'
          }}
          name={name}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const shelf = e.currentTarget.getAttribute('name');
            let book = JSON.parse(e.dataTransfer.getData('book'));
            update(book, shelf);
          }}>
          {books
            .filter((book) => book.shelf === name)
            .map((book) => (
              <Tilt
                key={book.id}
                options={{
                  reset: true,
                  speed: 500,
                  transition: true,
                  scale: 1.1
                }}>
                <li
                  draggable="true"
                  onDragStart={(e) => {
                    e.dataTransfer.setData(`book`, JSON.stringify(book));
                  }}>
                  <Book book={book} books={books} setBooks={setBooks} />
                </li>
              </Tilt>
            ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired
};

export default BookShelf;
