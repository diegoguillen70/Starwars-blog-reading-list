import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import starWar from "../../img/start_war.png";
import "../../styles/card.css";
import { Context } from "../store/appContext";

const Card = ({ url, object }) => {
  const img = useRef(null);
  const { store, actions } = useContext(Context);
  //console.log(character);
  return (
    <div className="card-children">
      <img
        src={url}
        className="car-image"
        alt="Sorry! Image not available at this time"
        ref={img}
        onError={() => (img.current.src = starWar)}
      />
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ height: "100px" }}
      >
        <h5 className="card-title">{object.name}</h5>
        <div className="d-flex justify-content-between">
          <Link
            to={`/details/${object.uid}`}
            className="btn btn-primary align-self-center my-0"
            onClick={() => actions.setUrl(object.url)}
          >
            Details
          </Link>
          <span onClick={() => actions.addFavorite(object)}>
            {store.favorites.includes(object.name) ? "★" : "☆"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
