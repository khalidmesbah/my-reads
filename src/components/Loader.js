import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  animation: ${spin} 0.5s infinite steps(var(--count));
`;

const Loader = () => {
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center h-100">
      <Spinner
        className="position-relative"
        style={{
          '--count': '10',
          height: '20vmin',
          width: '20vmin'
        }}>
        {[...Array(10)].map((e, i) => (
          <span
            key={i}
            style={{
              '--index': `${i}`,
              position: 'absolute',
              height: '25%',
              width: '5%',
              background: 'currentColor',
              top: '50%',
              left: '50%',
              transform:
                'translate(-50%, -50%)rotate(calc(((360 / var(--count)) * var(--index)) * 1deg))translate(0, 100%)',
              opacity: 'calc(var(--index) / var(--count))'
            }}></span>
        ))}
      </Spinner>
    </div>
  );
};

export default Loader;
