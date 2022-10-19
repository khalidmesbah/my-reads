import * as BooksAPI from "./../BooksAPI";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "./index";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(false);
  useEffect(() => {
    (async () => {
      setBook(await BooksAPI.get(id));
    })();
  }, [id]);
  const {
    language,
    publishedDate,
    publisher,
    pageCount,
    shelf,
    title,
    subtitle,
    authors,
    categories,
    description,
    previewLink,
  } = book;
  const thumbnail =
    book?.imageLinks?.thumbnail || "https://via.placeholder.com/140/200";
  return (
    <div className="book-details">
      {book ? (
        <main>
          <div className="details-top">
            <img src={thumbnail} alt="thumbnail" />
            <div className="about">
              <div className="info">
                <p className="info-text">Title:</p>
                <p>{title}</p>
              </div>
              <div className="info">
                <p className="info-text">Subtitle:</p>
                <p>{subtitle || "None"}</p>
              </div>
              <div className="info">
                <p className="info-text">Authors:</p>
                <p>{Array.isArray(authors) ? authors.join(" | ") : authors}</p>
              </div>
              <div className="info">
                <p className="info-text">Language:</p>
                <p>{language}</p>
              </div>
              <div className="info">
                <p className="info-text">Page Count:</p>
                <p>{pageCount}</p>
              </div>
            </div>
          </div>
          <div className="more-details">
            <div className="about">
              <div className="info">
                <p className="info-text">Categories</p>
                <p>
                  {Array.isArray(categories)
                    ? categories.join(" | ")
                    : categories}
                </p>
              </div>
              <div className="info">
                <p className="info-text">Current Shelf:</p>
                <p>{shelf}</p>
              </div>
            </div>
            <div className="about">
              <div className="info">
                <p className="info-text">Published Date:</p>
                <p>{publishedDate || "None"}</p>
              </div>
              <div className="info">
                <p className="info-text">Publisher:</p>
                <p>{publisher || "None"}</p>
              </div>
            </div>
          </div>
          <p className="info-text">Description</p>
          <p>{description || "None"}</p>
          <div className="buttons">
            <button>
              <a href={previewLink}>Preview</a>
            </button>
            <button>
              <Link to={"/"}>Home</Link>
            </button>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BookDetails;
