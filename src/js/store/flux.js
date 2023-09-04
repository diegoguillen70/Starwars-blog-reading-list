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
        /*if (localStorage.getItem("peopleStorage")) {
          console.log("No Fecth");
          const peopleOnStorage = localStorage.getItem("peopleStorage");
          console.log(peopleOnStorage);
          setStore({ people: peopleOnStorage });
        } else {*/
        fetch("https://www.swapi.tech/api/people/")
          .then((resp) => {
            return resp.json();
          })
          .then((dataJson) => {
            //console.log(dataJson.results);
            setStore({ people: dataJson.results });
            localStorage.setItem("peopleStorage", dataJson.results);
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
