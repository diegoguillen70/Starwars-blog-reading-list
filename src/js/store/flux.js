const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      starShips: [],
      favorities: [],
      loading: true,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((resp) => {
            return resp.json();
          })
          .then((dataJson) => {
            //console.log(dataJson.results);
            setStore({ people: dataJson.results });
          })
          .catch((error) => {
            console.error("An error happened" + error);
          });
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((resp) => {
            return resp.json();
          })
          .then((dataJson) => {
            //console.log(dataJson.results);
            setStore({ planets: dataJson.results });
          })
          .catch((error) => {
            console.error("An error happened" + error);
          });
      },
      getStarShips: () => {
        fetch("https://www.swapi.tech/api/starships/")
          .then((resp) => {
            return resp.json();
          })
          .then((dataJson) => {
            //console.log(dataJson.results);
            setStore({ starShips: dataJson.results });
          })
          .finally(() => setStore({ loading: false }))
          .catch((error) => {
            console.error("An error happened" + error);
          });
      },
      setLoading: () => setStore({ loading: true }),
    },
  };
};

export default getState;
