import { AnchorLink } from "./index";
import PropTypes from "prop-types";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-books-bar">
      <AnchorLink type="main" />
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          autoFocus={true}
          onInput={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
