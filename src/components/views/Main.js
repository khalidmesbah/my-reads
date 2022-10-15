import { AnchorLink, Header, BookShelf } from "../index";
const Main = ({ books, setBooks }) => {
  return (
    <>
      <Header />
      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={books}
          setBooks={setBooks}
          name="currentlyReading"
        />
        <BookShelf
          title="Want to Read"
          books={books}
          setBooks={setBooks}
          name="wantToRead"
        />
        <BookShelf title="Read" setBooks={setBooks} books={books} name="read" />
      </div>
      <div className="open-search">
        <AnchorLink type="search" />
      </div>
    </>
  );
};

export default Main;
