import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";

export const Details = (prps) => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getDetails(store.url);
  }, []);

  return (
    <>
      <div className="tabset mx-auto mt-5">
        <input
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="marzen"
          checked
        />
        <label htmlFor="tab1">Description</label>

        {/* <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
        <label for="tab2">Rauchbier</label> */}

        <div className="tab-panels">
          <section id="marzen" className="tab-panel">
            <h2>{store.pe}</h2>
          </section>
          {/* <section id="rauchbier" className="tab-panel">
            <h2>6B. Rauchbier</h2>
            <p>
              <strong>Overall Impression:</strong> An elegant, malty German
              amber lager with a balanced, complementary beechwood smoke
              character. Toasty-rich malt in aroma and flavor, restrained
              bitterness, low to high smoke flavor, clean fermentation profile,
              and an attenuated finish are characteristic.
            </p>
            <p>
              <strong>History:</strong> A historical specialty of the city of
              Bamberg, in the Franconian region of Bavaria in Germany.
              Beechwood-smoked malt is used to make a Märzen-style amber lager.
              The smoke character of the malt varies by maltster; some breweries
              produce their own smoked malt (rauchmalz).
            </p>
          </section> */}
        </div>
      </div>
    </>
  );
};
