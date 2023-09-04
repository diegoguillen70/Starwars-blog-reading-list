import React, { useContext } from "react";
import { Link } from "react-router-dom";
import start_war from "../../img/start_war.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
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
              {store.favorites.map((favorite, item) => {
                return (
                  <li key={item} className="d-flex justify-content-between">
                    {favorite}{" "}
                    <p onClick={() => actions.removeFavorite(favorite.name)}>
                      🗑
                    </p>
                  </li>
                );
              })}
              {/* <button className="dropdown-item" type="button">
                  Action
                </button> */}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
