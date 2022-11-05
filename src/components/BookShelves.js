import { BookShelf } from './index';

const BookShelves = () => {
  return (
    <div className="p-3 d-flex gap-5 flex-wrap flex-grow-1">
      <BookShelf title="Want to Read" name="wantToRead" />
      <BookShelf title="Currently Reading" name="currentlyReading" />
      <BookShelf title="Read" name="read" />
    </div>
  );
};

export default BookShelves;
