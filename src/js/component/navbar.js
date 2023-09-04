import React from "react";
import { Link } from "react-router-dom";
import start_war from "../../img/start_war.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light me-5">
      <Link to="/">
        <span className="navbar-brand mx-5 h1">
          <img src={start_war} style={{ width: "80px" }} />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorities
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
