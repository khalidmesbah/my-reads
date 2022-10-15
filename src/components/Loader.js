const Loader = () => {
  return (
    <div className="loader" style={{ "--count": "10" }}>
      <span style={{ "--index": "0" }}></span>
      <span style={{ "--index": "1" }}></span>
      <span style={{ "--index": "2" }}></span>
      <span style={{ "--index": "3" }}></span>
      <span style={{ "--index": "4" }}></span>
      <span style={{ "--index": "5" }}></span>
      <span style={{ "--index": "6" }}></span>
      <span style={{ "--index": "7" }}></span>
      <span style={{ "--index": "8" }}></span>
      <span style={{ "--index": "9" }}></span>
    </div>
  );
};

export default Loader;
