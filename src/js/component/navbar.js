import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import start_war from "../../img/start_war.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isShow, setIsShow] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState("");

  useEffect(() => {
    window.addEventListener("show.bs.dropdown", (event) => {});
  }, []);
  function handleClick() {
    setIsShow(!isShow);
    isShow && store.favorites.length > 0
      ? setDisplayDropdown("dropdown")
      : setDisplayDropdown("");
  }
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
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
              className="btn btn-primary dropdown-toggle me-5"
              data-bs-toggle={""}
              aria-expanded="false"
              onClick={handleClick}
            >
              Favorities {store.favorites.length}
            </button>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                isShow && store.favorites.length > 0 ? "show" : ""
              }`}
              data-bs-popper={isShow ? "none" : ""}
            >
              {store.favorites.map((favorite, item) => {
                return (
                  <li key={item} className="d-flex justify-content-between">
                    {favorite}
                    <p onClick={() => actions.removeFavorite(favorite)}>🗑</p>
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
