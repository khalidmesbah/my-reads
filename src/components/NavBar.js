const NavBar = () => {
  let mode = localStorage?.getItem("mode");
  mode && document.body.classList.add(mode);
  return (
    <div className="list-books-title">
      <h1>MyReads</h1>
      <label className="switch-wrapper">
        <input
          type="checkbox"
          className="switch"
          defaultChecked={mode ? true : false}
          onChange={(e) => {
            let mode = e.currentTarget.checked ? "dark" : "";
            localStorage.setItem("mode", mode);
            document.body.classList.toggle("dark");
          }}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default NavBar;
