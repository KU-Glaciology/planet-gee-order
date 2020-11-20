import { createSelector } from "redux-bundler";

const bundle = {
  name: "status",

  getReducer: () => {
    const initialData = {
      _links: [],
      orders: [],
      is_fetching: false,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "STATUS_UPDATE":
          return Object.assign({}, state, payload);
        case "AUTH_LOGOUT":
          return Object.assign({}, initialData);
        default:
          return state;
      }
    };
  },

  selectStatusIsFetching: (state) => {
    return state.status.is_fetching;
  },

  selectStatusOrders: (state) => {
    return state.status.orders;
  },

  selectStatusState: (state) => {
    return state.status;
  },

  selectStatusOrdersByRoute: createSelector(
    "selectRouteParams",
    "selectStatusState",
    (params, orders) => {
      if (!params || !params.orderId) return null;
      return orders[params.orderId];
    }
  ),

  doStatusFetch: () => ({ dispatch, store }) => {
    dispatch({
      type: "STATUS_UPDATE",
      payload: {
        is_fetching: true,
      },
    });
    const apiKey = store.selectAuthPlanetApiKey();
    if (apiKey) {
      fetch("https://glacier-proxy.herokuapp.com/", {
        // fetch("http://localhost:8010", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Basic ${btoa(`${apiKey}:`)}`,
          "Target-URL": "https://api.planet.com/compute/ops/orders/v2",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.orders.forEach((order) => {
            data[order.id] = order;
          });
          data.is_fetching = false;
          dispatch({
            type: "STATUS_UPDATE",
            payload: data,
          });
        })
        .catch((err) => {
          console.log("wtf", err);
        });
    }
  },

  init: (store) => {
    // window.setInterval(store.doStatusFetch, 5000);
    store.doStatusFetch();
  },
};

export default bundle;
