const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      favorities: [],
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
    },
  };
};

export default getState;
