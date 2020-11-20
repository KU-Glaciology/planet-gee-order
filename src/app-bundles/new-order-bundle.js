import { createSelector } from "redux-bundler";

const bundle = {
  name: "order",

  getReducer: () => {
    const initialData = {
      name: "",
      itemIds: [],
      itemType: "PSScene4Band",
      productBundle: "PSScene4Band",
      workspace: "",
      collection: "",
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "ORDERS_SET_STATE":
        case "ORDER_UPDATE":
          return Object.assign({}, state, payload);
        default:
          return state;
      }
    };
  },

  selectOrderName: (state) => {
    return state.order.name;
  },

  selectOrderItemIds: (state) => {
    return state.order.itemIds;
  },

  selectOrderItemType: (state) => {
    return state.order.itemType;
  },

  selectOrderProductBundle: (state) => {
    return state.order.productBundle;
  },

  selectOrderWorkspace: (state) => {
    return state.order.workspace;
  },

  selectOrderCollection: (state) => {
    return state.order.collection;
  },

  selectOrderPayload: createSelector(
    "selectOrderName",
    "selectOrderItemType",
    "selectOrderItemIds",
    "selectOrderProductBundle",
    "selectOrderWorkspace",
    "selectOrderCollection",
    (name, itemIds, itemType, productBundle, workspace, collection) => {
      return {
        name: name,
        products: [
          {
            item_ids: itemIds,
            item_type: itemType,
            product_bundle: productBundle,
          },
        ],
        delivery: {
          google_earth_engine: {
            project: workspace,
            collection: collection,
          },
        },
      };
    }
  ),

  doOrderSubmit: (payload) => ({ dispatch, store }) => {
    const apiKey = store.selectAuthPlanetApiKey();
    console.log("posting", payload);
    fetch("https://glacier-proxy.herokuapp.com/", {
      // fetch("http://localhost:8010", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "content-type": "application/json",
        Authorization: `Basic ${btoa(`${apiKey}:`)}`,
        "Target-URL": "https://api.planet.com/compute/ops/orders/v2",
      }),
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log("got something back");
        return response.json();
      })
      .then((data) => {
        store.doModalClose();
        store.doStatusFetch();
      });
  },
};

export default bundle;
