import React, { useContext } from "react";
import { Context } from "./../store/appContext.js";
import "../../styles/home.css";
import Card from "../component/card.js";
import { element } from "prop-types";

export const Home = () => {
  const { actions, store } = useContext(Context);

  {
    if (store.loading) {
      return (
        <div
          className="spinner-grow mx-auto"
          style={{
            width: "3rem",
            height: "3rem",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
          role="status"
        ></div>
      );
    } else {
      return (
        <>
          <h1 className="mx-auto w-75 text-danger mt-3">Characters</h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.people.length > 0 &&
              store.people.map((person, item) => {
                return <Card onTitle={person.name} />;
              })}
          </div>
          <h1 className="mx-auto w-75 text-danger mt-3">Planets</h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.planets.length > 0 &&
              store.planets.map((planet, item) => {
                return <Card onTitle={planet.name} />;
              })}
          </div>
          <h1 className="mx-auto w-75 text-danger mt-3">Star Ships</h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.starShips.length > 0 &&
              store.starShips.map((ship, item) => {
                return <Card onTitle={ship.name} />;
              })}
          </div>
        </>
      );
    }
  }
};
