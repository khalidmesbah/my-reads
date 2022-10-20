import { AnchorLink } from "./index";
import PropTypes from "prop-types";

const SearchBar = ({ query, setQuery }) => {
  return (
    <form className="d-flex w-100 bg-dark input-group" role="search">
      <AnchorLink type="main" />
      <input
        type="search"
        placeholder="Search by title, author, or ISBN"
        className="form-control rounded-0"
        aria-label="Search"
        value={query}
        autoFocus={true}
        onInput={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
