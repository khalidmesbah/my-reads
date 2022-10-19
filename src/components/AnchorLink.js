import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AnchorLink = ({ type }) => {
  return (
    <Link
      to={type === "main" ? "/" : "/search"}
      className={`${type === "main" && "close-search"}`}
    >
      {type === "main" ? "Close" : type === "search" ? "Add a book" : null}
    </Link>
  );
};

AnchorLink.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AnchorLink;
