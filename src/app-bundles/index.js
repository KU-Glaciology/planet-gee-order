import {
  composeBundles,
  createCacheBundle,
  createUrlBundle,
} from "redux-bundler";
import cache from "../utils/cache";
import authBundle from "./auth-bundle";
import modalWindowBundle from "./modal-window-bundle";
import newOrderBundle from "./new-order-bundle";
import orderStatusBundle from "./order-status-bundle";
import routeBundle from "./route-bundle";

export default composeBundles(
  createCacheBundle({
    cacheFn: cache.set,
  }),
  createUrlBundle(),
  authBundle,
  modalWindowBundle,
  newOrderBundle,
  orderStatusBundle,
  routeBundle
);
