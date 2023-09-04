import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";

export const Details = (props) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    actions.setLoading(true);
    console.log(store.url);
    //actions.getDetails(store.url);
    fetch(store.url)
      .then((resp) => {
        return resp.json();
      })
      .then((dataJson) => {
        //console.log(dataJson.result);
        setDetails(dataJson.result);
        actions.setLoading(false);
        //localStorage.setItem("details", JSON.stringify(dataJson));
      })
      .catch((error) => {
        console.error("An error happened" + error);
      });
  }, []);
  details.properties && console.log(details.properties);
  console.log(
    `https://starwars-visualguide.com/assets/img/${store.search}/${id}.jpg`
  );
  {
    if (store.loading) {
      // console.log(details);
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
    } else if (details.properties) {
      return (
        <>
          <div className="tabset mx-auto mt-5">
            <label htmlFor="tab1">Description</label>
            <img
              className="rounded float-start mx-5"
              src={`https://starwars-visualguide.com/assets/img/${store.search}/${id}.jpg`}
            />

            <ul>
              <li>Name: {details.properties.name}</li>
              <li>DOB: {details.properties.birth_year}</li>
              <li>Eye Color: {details.properties.eye_color}</li>
              <li>Hair Color: {details.properties.hair_color}</li>
            </ul>

            <div className="tab-panels">
              <section id="marzen" className="tab-panel">
                <h2></h2>
              </section>
            </div>
          </div>
        </>
      );
    }
  }
};
