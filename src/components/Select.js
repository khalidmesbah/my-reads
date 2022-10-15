import * as BooksAPI from "../BooksAPI";
const Select = ({ book, books, setBooks }) => {
  const update = async (e) => {
    await BooksAPI.update(book, e.target.value);
    const oldBooks = books.filter((b) => b.id !== book.id);
    book.shelf = e.target.value;
    setBooks([...oldBooks, book]);
  };
  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf || "none"} onChange={update}>
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

export default Select;
