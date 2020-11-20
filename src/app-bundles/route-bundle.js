import { createRouteBundle } from "redux-bundler";
import OrderStatus from "../app-components/order-status/page";

export default createRouteBundle({
  "": OrderStatus,
  "/": OrderStatus,
  "*": OrderStatus,
});
