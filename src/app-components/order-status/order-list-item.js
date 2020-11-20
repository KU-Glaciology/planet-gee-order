import React from "react";
import { connect } from "redux-bundler-react";
import classnames from "../../utils/classnames";
import { formatDistanceToNowStrict } from "date-fns";
import OrderDetails from "../order-details";

const OrderListItem = connect("doModalOpen", ({ doModalOpen, order }) => {
  const stateIconClass = classnames({
    "mr-2": true,
    mdi: true,
    "mdi-file-clock": order.state === "queued",
    "mdi-file-cog": order.state === "running",
    "mdi-file-alert": order.state === "failed",
    "mdi-file-check": order.state === "success",
    "mdi-file-powerpoint": order.state === "partial",
    "mdi-file-cancel": order.state === "cancelled",
    "text-primary": order.state === "queued" || order.state === "running",
    "text-success": order.state === "success" || order.state === "partial",
    "text-danger": order.state === "failed",
    "text-light": order.state === "cancelled",
  });

  const orderDate = formatDistanceToNowStrict(new Date(order.created_on));

  const showDetails = () => {
    doModalOpen(OrderDetails, { orderId: order.id }, "lg");
  };

  return (
    <li className="list-group-item">
      <span className="float-right">{`created ${orderDate} ago`}</span>
      <span title={`${order.name}, delivery status: ${order.state}`}>
        <i className={stateIconClass}></i>
        <span className="text-link" onClick={showDetails}>
          {order.name}
        </span>
      </span>
    </li>
  );
});

export default OrderListItem;
