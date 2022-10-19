import PropTypes from "prop-types";
import { AnchorLink,BookShelves } from "../index";
const Main = ({ books, setBooks }) => {
  return (
    <>
      <BookShelves books={books} setBooks={setBooks} />
      <div className="open-search">
        <AnchorLink type="search" />
      </div>
    </>
  );
};

Main.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Main;
