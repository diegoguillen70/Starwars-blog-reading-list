import React from "react";
import { Link } from "react-router-dom";
import startWar from "../../img/start_war.png";

const Card = (props) => {
  return (
    <div className="card-children">
      <img src={startWar} className="card-img-top" alt="..." />
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ height: "200px" }}
      >
        <h5 className="card-title">{props.onTitle}</h5>
        <ul>
          <li>Gender: Male</li>
          <li>Hair Color: Male</li>
          <li>Eye Color: Male</li>
        </ul>
        <div className="d-flex justify-content-between">
          <Link
            to="/details/:id"
            className="btn btn-primary align-self-center my-0"
          >
            Go somewhere
          </Link>
          <span>☆</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
