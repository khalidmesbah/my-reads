import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  addUser,
  getCurrentUser,
  getUsers,
  setCurrentUser,
  deleteUser,
} from "../utils/token";

function NavBar({ setHasUserChanged }) {
  const navigate = useNavigate();
  let mode = localStorage?.getItem("mode");
  mode
    ? (document.body.className = "bg-dark text-light")
    : (document.body.className = "");
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-success">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <h1>MyReads</h1>
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          type="button"
          title="button"
          aria-controls="nav"
          aria-label="Expand navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav flex-grow-1 justify-content-around align-items-center">
            <li className="nav-item">
              <span className="navbar-text text-break d-flex align-items-center gap-2">
                <span className="d-none d-sm-block">Signed In as:</span>
                <select
                  className="form-select w-auto"
                  aria-label="select users"
                  defaultValue={getCurrentUser() || "No Users Available"}
                  onChange={(e) => {
                    setCurrentUser(e.currentTarget.value);
                    setHasUserChanged((prev) => !prev);
                    navigate("/");
                  }}
                >
                  {getUsers().length === 0 && (
                    <option value="No Users Available">
                      No Users Available
                    </option>
                  )}
                  {getUsers().map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-danger"
                  title="delete current user"
                  onClick={(e) => {
                    deleteUser().then(
                      (res) => {
                        setIsNewUserAdded(!isNewUserAdded);
                        if (res === true) {
                          setHasUserChanged((prev) => !prev);
                        }
                      },
                      (err) => console.error(err)
                    );
                  }}
                >
                  X
                </button>
              </span>
            </li>
            <li className="nav-item">
              <form
                className="d-flex mb-2 mt-2"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  const emailElement = document.getElementById("user");
                  emailElement.setAttribute("placeholder", "Add New User");
                  const value = emailElement.value.trim();
                  if (!value) {
                    emailElement.setAttribute(
                      "placeholder",
                      "Please, write a valid name."
                    );
                    emailElement.value = "";
                    return;
                  }
                  if (getUsers().includes(value)) {
                    emailElement.setAttribute(
                      "placeholder",
                      "The username is already taken."
                    );
                    emailElement.value = "";
                    return;
                  }
                  addUser(value);
                  emailElement.value = "";
                  setIsNewUserAdded(!isNewUserAdded);
                  getUsers().length === 1 && setHasUserChanged((prev) => !prev);
                }}
              >
                <input
                  className="form-control me-2"
                  type="text"
                  id="user"
                  maxLength="35"
                  placeholder="Add New User"
                  aria-label="Add New User"
                />
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </form>
            </li>
            <li className="nav-item d-flex justify-content-center align-items-center">
              <div
                className="form-check form-switch w-auto h-auto"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="button"
                  id="flexSwitchCheckDefault"
                  defaultChecked={mode ? true : false}
                  onChange={(e) => {
                    let mode = e.currentTarget.checked ? "dark" : "";
                    localStorage.setItem("mode", mode);
                    setHasUserChanged((prev) => !prev);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{ cursor: "pointer" }}
                >
                  Dark Mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
