import React, { useContext } from "react";
import { Context } from "./../store/appContext.js";
import "../../styles/home.css";
import Card from "../component/card.js";
import { element } from "prop-types";

export const Home = () => {
  const { actions, store } = useContext(Context);
  return (
    <>
      <h1 className="mx-auto w-75 text-danger mt-3">Characters</h1>
      <div className="d-flex mx-auto text-center scroll-x w-75">
        {store.people.length > 0 &&
          store.people.map((person, item) => {
            return <Card onTitle={person.name} />;
          })}
      </div>
    </>
  );
};
