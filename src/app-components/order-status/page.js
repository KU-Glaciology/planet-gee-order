import React from "react";
import { connect } from "redux-bundler-react";
import OrderListItem from "./order-list-item";
import Login from "../login";
import NewOrder from "../new-order";
import ChaseSpinner from "../spinners/chase-spinner";

const OrderStatus = connect(
  "doAuthLogout",
  "doModalOpen",
  "doStatusFetch",
  "selectAuthPlanetApiKey",
  "selectStatusOrders",
  "selectStatusIsFetching",
  ({
    doAuthLogout,
    doModalOpen,
    doStatusFetch,
    authPlanetApiKey: key,
    statusOrders,
    statusIsFetching,
  }) => {
    const handleLogin = () => {
      doModalOpen(Login);
    };

    const handleNew = () => {
      doModalOpen(NewOrder);
    };

    return (
      <div className="container">
        <div className="clearfix">
          <div className="float-right">
            {!!key ? (
              <>
                <button onClick={doAuthLogout} className="btn btn-link">
                  Clear API Key
                </button>
                <button onClick={handleLogin} className="btn btn-link">
                  Edit API Key
                </button>
              </>
            ) : (
              <button onClick={handleLogin} className="btn btn-link">
                Enter API Key
              </button>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            {!!key ? (
              <div>
                <div className="mb-2 clearfix">
                  <div className="float-right">
                    <button
                      onClick={handleNew}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      <i className="mdi mdi-plus mr-2"></i>New Order
                    </button>
                    {statusIsFetching ? (
                      <button className="btn btn-sm btn-primary mr-2">
                        <span
                          className="mr-2"
                          style={{ display: "inline-block" }}
                        >
                          <ChaseSpinner />{" "}
                        </span>
                        Refresh
                      </button>
                    ) : (
                      <button
                        onClick={doStatusFetch}
                        className="btn btn-sm btn-primary mr-2"
                      >
                        <i className="mdi mdi-refresh mr-2"></i>Refresh
                      </button>
                    )}
                  </div>
                </div>
                <ul className="list-group">
                  {statusOrders.map((order, i) => {
                    return <OrderListItem key={i} order={order} />;
                  })}
                </ul>
              </div>
            ) : (
              <div>Please enter your API key to get started.</div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default OrderStatus;
