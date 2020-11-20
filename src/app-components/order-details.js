import React from "react";
import { connect } from "redux-bundler-react";
import { format } from "date-fns";

const OrderDetails = connect(
  "doModalClose",
  "selectStatusState",
  ({ doModalClose, statusState: orders, orderId }) => {
    const order = orders[orderId];
    if (!order) return null;

    const createdDate = format(
      new Date(order.created_on),
      "dd-MMM-yyyy HH:mm:ss"
    );

    const modifiedDate = format(
      new Date(order.last_modified),
      "dd-MMM-yyyy HH:mm:ss"
    );
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{order.name}</h4>
          <button
            onClick={doModalClose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h6 className="card-subtitle mb-2 text-muted">
            <span className="float-right">{createdDate}</span>
            Created:
          </h6>
          {order.created_on === order.last_modified ? null : (
            <h6 className="card-subtitle mb-2 text-muted">
              <span className="float-right">{modifiedDate}</span>
              Last Modified:
            </h6>
          )}
          <p>State: {order.state}</p>
          <div className="card-text">{order.last_message}</div>

          <div className="hidden">
            {!order.error_hints.length ? (
              <small>No hints available</small>
            ) : (
              <small>{order.error_hints}</small>
            )}
          </div>

          <p>Delivery Information</p>
          <div>
            <pre className="code">
              {JSON.stringify(order.delivery, null, 2)}
            </pre>
          </div>

          <p>Products Requested</p>
          <div>
            <pre>{JSON.stringify(order.products, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
);

export default OrderDetails;
