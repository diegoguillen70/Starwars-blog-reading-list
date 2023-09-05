import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";

export const Details = (props) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    actions.setLoading(true);
    // console.log(store.url);
    //actions.getDetails(store.url);
    /*if (localStorage.getItem("detailsStorage")) {
      console.log("No Fecth in Details");
      const detailsOnStorage = localStorage.getItem("detailsStorage");
      console.log(JSON.parse(detailsOnStorage));
      setDetails(JSON.parse(detailsOnStorage));
      actions.setLoading(false);
    } else {*/
    actions.setLoading(true);
    fetch(store.url)
      .then((resp) => {
        return resp.json();
      })
      .then((dataJson) => {
        //console.log(dataJson.result);
        setDetails(dataJson.result);
        localStorage.setItem("detailsStorage", JSON.stringify(dataJson.result));
        actions.setLoading(false);
        //localStorage.setItem("details", JSON.stringify(dataJson));
      })
      .catch((error) => {
        console.error("An error happened " + error);
        navigate("/");
      });
    /*  }*/
  }, []);
  //details.properties && console.log(details.properties);
  //console.log(`https://starwars-visualguide.com/assets/img/${store.search}/${id}.jpg`);
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
      const entries = Object.entries(details.properties).slice(0, 7);

      //console.log(entries);
      return (
        <>
          <section className="details-container">
            <div className="tabset mx-auto mt-5 bg-light">
              <label htmlFor="tab1">Description</label>
              <img
                className="rounded float-start me-5 img-details"
                src={`https://starwars-visualguide.com/assets/img/${store.search}/${id}.jpg`}
              />

              <ul>
                <li>Name: {details.properties.name}</li>
                {entries.map(([key, val] = entry) => {
                  return <li>{`${key}: ${val}`}</li>;
                })}
              </ul>

              <div className="tab-panels">
                <section id="marzen" className="tab-panel">
                  <h2></h2>
                </section>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
};
