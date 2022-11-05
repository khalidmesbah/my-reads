import PropTypes from 'prop-types';

const NotFound = ({ error }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center h-100 flex-grow-1"
      style={{
        fontSize: 'clamp(20px, 25vw, 25vh)'
      }}>
      ¯\(ツ)/¯
      <div
        className="position-absolute text-capitalize"
        style={{
          fontSize: '.2em',
          transform: 'translateY(-200%)'
        }}>
        {error}
      </div>
    </div>
  );
};

NotFound.propTypes = {
  error: PropTypes.string.isRequired
};

export default NotFound;
