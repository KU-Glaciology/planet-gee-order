const bundle = {
  name: "auth",

  getReducer: () => {
    const initialData = {
      planetApiKey: null,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "AUTH_UPDATE":
        case "AUTH_LOGOUT":
          return Object.assign({}, state, payload);
        default:
          return state;
      }
    };
  },

  selectAuthIsLoggedIn: (state) => {
    return !!state.auth.planetApiKey;
  },

  selectAuthPlanetApiKey: (state) => {
    return state.auth.planetApiKey || "";
  },

  doAuthLogout: () => ({ dispatch }) => {
    dispatch({
      type: "AUTH_LOGOUT",
      payload: {
        planetApiKey: null,
      },
    });
  },

  doAuthSetPlanetApiKey: (key) => ({ dispatch }) => {
    dispatch({
      type: "AUTH_UPDATE",
      payload: {
        planetApiKey: key,
      },
    });
  },

  persistActions: ["AUTH_UPDATE"],
};

export default bundle;
