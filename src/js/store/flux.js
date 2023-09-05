const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      people: [],
      planets: [],
      starShips: [],
      details: [],
      favorites: [],
      currentDetails: [],
      url: "",
      search: "",
    },
    actions: {
      // Use getActions to call a function within a fuction

      getPeople: () => {
        //localStorage.clear();
        if (localStorage.getItem("peopleStorage")) {
          console.log("No Fecth in People");
          const peopleOnStorage = localStorage.getItem("peopleStorage");
          console.log(JSON.parse(peopleOnStorage));
          setStore({ people: JSON.parse(peopleOnStorage), loading: false });
        } else {
          fetch("https://www.swapi.tech/api/people/")
            .then((resp) => {
              return resp.json();
            })
            .then((dataJson) => {
              //console.log(dataJson.results);
              setStore({ people: dataJson.results });
              localStorage.setItem(
                "peopleStorage",
                JSON.stringify(dataJson.results)
              );
            })
            .catch((error) => {
              console.error("An error happened" + error);
            });
        }
      },
      getPlanets: () => {
        if (localStorage.getItem("planetsStorage")) {
          console.log("No Fecth in Planets");
          const planetsOnStorage = localStorage.getItem("planetsStorage");
          console.log(JSON.parse(planetsOnStorage));
          setStore({ planets: JSON.parse(planetsOnStorage), loading: false });
        } else {
          fetch("https://www.swapi.tech/api/planets/")
            .then((resp) => {
              return resp.json();
            })
            .then((dataJson) => {
              //console.log(dataJson.results);
              setStore({ planets: dataJson.results });
              localStorage.setItem(
                "planetsStorage",
                JSON.stringify(dataJson.results)
              );
            })
            .catch((error) => {
              console.error("An error happened" + error);
            });
        }
      },
      getStarShips: () => {
        if (localStorage.getItem("starShipsStorage")) {
          console.log("No Fecth in StarShips");
          const startShipsOnStorage = localStorage.getItem("starShipsStorage");
          console.log(JSON.parse(startShipsOnStorage));
          setStore({
            starShips: JSON.parse(startShipsOnStorage),
            loading: false,
          });
        } else {
          fetch("https://www.swapi.tech/api/starships/")
            .then((resp) => {
              return resp.json();
            })
            .then((dataJson) => {
              //console.log(dataJson.results);
              setStore({ starShips: dataJson.results });
              localStorage.setItem(
                "starShipsStorage",
                JSON.stringify(dataJson.results)
              );
            })
            .finally(() => setStore({ loading: false }))
            .catch((error) => {
              console.error("An error happened" + error);
            });
        }
      },
      setLoading: (state) => setStore({ loading: state }),
      addFavorite: (character) => {
        const store = getStore();
        !store.favorites.includes(character.name) &&
          setStore({ favorites: [character.name, ...store.favorites] });
      },
      removeFavorite: (character) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((item) => item != character),
        });
      },
      getDetails: (url) => {
        //console.log(url);
        fetch(url)
          .then((resp) => {
            return resp.json();
          })
          .then((dataJson) => {
            console.log(dataJson);
            setStore({ currentDetails: dataJson.result });
          })
          .finally(() => setStore({ loading: false }))
          .catch((error) => {
            console.error("An error happened" + error);
          });
      },
      setUrl: (url) => setStore({ url: url }),
      setSearch: (search) => setStore({ search: search }),
    },
  };
};

export default getState;
