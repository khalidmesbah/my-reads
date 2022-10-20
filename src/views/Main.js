import PropTypes from "prop-types";
import { AnchorLink, BookShelves } from "../components/index";

const Main = ({ books, setBooks }) => {
  return (
    <>
      <BookShelves books={books} setBooks={setBooks} />
      <div
        className="position-fixed"
        style={{
          right: "25px",
          bottom: "25px",
        }}
      >
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
