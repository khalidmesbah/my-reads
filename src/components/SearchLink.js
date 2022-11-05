import { AnchorLink } from './index';

const SearchLink = () => {
  return (
    <div
      className="position-fixed"
      style={{
        right: '25px',
        bottom: '25px'
      }}>
      <AnchorLink type="search" />
    </div>
  );
};

export default SearchLink;
