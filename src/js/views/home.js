import React, { useContext, useId } from "react";
import { Context } from "./../store/appContext.js";
import "../../styles/home.css";
import Card from "../component/card.js";
import { element } from "prop-types";

export const Home = () => {
  const { actions, store } = useContext(Context);
  const itemID = useId();
  //console.log(store.people);
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
    } else if (store.people) {
      return (
        <>
          <h1 className="mx-auto w-75 text-danger mt-3">
            Characters <i className="fa-solid fa-backward-step backward"></i>
            <i className="fa-solid fa-forward-step forward"></i>
          </h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.people.length > 0 &&
              store.people.map((person, item) => {
                return (
                  <Card
                    key={item}
                    object={person}
                    select={"characters"}
                    url={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                  />
                );
              })}
          </div>
          <h1 className="mx-auto w-75 text-danger mt-3">
            Planets <i className="fa-solid fa-backward-step backward"></i>
            <i className="fa-solid fa-forward-step forward"></i>
          </h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.planets.length > 0 &&
              store.planets.map((planet, item) => {
                return (
                  <Card
                    key={item * 100}
                    object={planet}
                    select={"planets"}
                    url={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  />
                );
              })}
          </div>
          <h1 className="mx-auto w-75 text-danger mt-3">
            Star Ships <i className="fa-solid fa-backward-step backward"></i>
            <i className="fa-solid fa-forward-step forward"></i>
          </h1>
          <div className="d-flex mx-auto text-center scroll-x w-75">
            {store.starShips.length > 0 &&
              store.starShips.map((ship, item) => {
                return (
                  <Card
                    key={item * 1000}
                    object={ship}
                    select={"starships"}
                    url={`https://starwars-visualguide.com/assets/img/starships/${ship.uid}.jpg`}
                  />
                );
              })}
          </div>
        </>
      );
    }
  }
};
