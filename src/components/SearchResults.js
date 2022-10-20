import PropTypes from 'prop-types';
import { Book, Loader, NotFound } from './index';
import Tilt from 'react-tilt';

const SearchResults = ({ resultingBooks, isLoading, books, setBooks }) => {
  let isNotFound = resultingBooks.length === 0 ? true : false;

  return (
    <div className="flex-grow-1">
      {isLoading ? (
        <Loader />
      ) : isNotFound ? (
        <NotFound />
      ) : (
        <ol
          className="h-100 d-flex justify-content-center flex-wrap align-items-start gap-3 p-3"
          style={{
            listStyleType: 'none'
          }}>
          {resultingBooks.map((book) => (
            <Tilt
              key={book.id}
              options={{
                reset: true,
                speed: 500,
                transition: true,
                scale: 1.1
              }}>
              <li>
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
  resultingBooks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired
};

export default SearchResults;
