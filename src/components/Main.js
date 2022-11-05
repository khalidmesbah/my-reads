import { useSelector } from 'react-redux';
import { BookShelves, NotFound } from './index';

const Main = () => {
  const { books } = useSelector((v) => v);
  return <>{books.length ? <BookShelves /> : <NotFound error="you have no books" />}</>;
};

export default Main;
