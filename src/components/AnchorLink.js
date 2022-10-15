import { Link } from "react-router-dom";
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

export default AnchorLink;
