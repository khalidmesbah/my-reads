import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addUser, getCurrentUser, getUsers, setCurrentUser, deleteUser } from '../utils/token';
import PropTypes from 'prop-types';

function NavBar({ setRenderApp }) {
  const navigate = useNavigate();
  let mode = localStorage?.getItem('mode');
  mode ? (document.body.className = 'bg-dark text-light') : (document.body.className = '');
  const [renderNavbar, setRenderNavbar] = useState(false);

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
          aria-label="Expand navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav flex-grow-1 justify-content-around align-items-center gap-2">
            <li className="nav-item">
              <span className="navbar-text text-break d-flex align-items-center gap-2">
                <span className="d-none d-sm-block">Signed In as:</span>
                <select
                  className="form-select w-75"
                  aria-label="select users"
                  defaultValue={getCurrentUser() || 'No Users Available'}
                  onChange={(e) => {
                    setCurrentUser(e.currentTarget.value);
                    setRenderApp((prev) => !prev);
                    navigate('/');
                  }}>
                  {getUsers().length === 0 && (
                    <option value="No Users Available">No Users Available</option>
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
                  onClick={() => {
                    deleteUser().then(
                      (res) => {
                        res && setRenderApp((prev) => !prev);
                      },
                      (err) => console.error(err)
                    );
                  }}>
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
                  const emailElement = document.getElementById('user');
                  emailElement.setAttribute('placeholder', 'Add New User');
                  const value = emailElement.value.trim();
                  if (!value) {
                    emailElement.setAttribute('placeholder', 'Please, write a valid name.');
                    emailElement.value = '';
                    return;
                  }
                  if (getUsers().includes(value)) {
                    emailElement.setAttribute('placeholder', 'The username is already taken.');
                    emailElement.value = '';
                    return;
                  }
                  addUser(value);
                  emailElement.value = '';
                  setRenderNavbar(!renderNavbar);
                  getUsers().length === 1 && setRenderApp((prev) => !prev);
                }}>
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
            <li className="nav-item d-flex justify-content-center align-items-center w-25">
              <div
                className="form-check form-switch p-0 d-flex justify-content-center flex-wrap gap-1 align-items-center w-auto"
                style={{ cursor: 'pointer' }}>
                <input
                  className="form-check-input m-0"
                  type="checkbox"
                  role="button"
                  id="flexSwitchCheckDefault"
                  defaultChecked={mode ? true : false}
                  onChange={(e) => {
                    let mode = e.currentTarget.checked ? 'dark' : '';
                    localStorage.setItem('mode', mode);
                    setRenderApp((prev) => !prev);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{ cursor: 'pointer' }}>
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

NavBar.propTypes = {
  setRenderApp: PropTypes.func.isRequired
};

export default NavBar;
