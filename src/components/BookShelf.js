import PropTypes from 'prop-types';
import { Book } from './index';
import Tilt from 'react-tilt';
import { useDispatch, useSelector } from 'react-redux';
import { switchShelf } from '../store/slices/booksSlice';

const BookShelf = ({ name, title }) => {
  const { books } = useSelector((s) => s);
  const filteredBooks = books.filter((book) => book.shelf === name);
  const dispatch = useDispatch();

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
            dispatch(switchShelf({ book, shelf }));
          }}>
          {filteredBooks.length ? (
            filteredBooks.map((book) => (
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
                  <Book book={book} />
                </li>
              </Tilt>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center w-100 h-100 display-7">
              No Books Here
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BookShelf;
