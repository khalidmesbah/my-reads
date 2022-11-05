import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { switchShelf } from '../store/slices/booksSlice';

const Select = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-shelf-changer">
      <select
        className="w-100 h-100 opacity-0"
        role="button"
        defaultValue={book.shelf || 'none'}
        onChange={(e) => dispatch(switchShelf({ book, shelf: e.target.value }))}>
        <option value="move to" disabled>
          Move To..
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

Select.propTypes = {
  book: PropTypes.object.isRequired
};

export default Select;
