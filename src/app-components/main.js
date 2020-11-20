import React from "react";
import { connect } from "redux-bundler-react";
import { getNavHelper } from "internal-nav-helper";
import Modal from "./modal";

const Main = connect(
  "doUpdateUrl",
  "selectRoute",
  ({ doUpdateUrl, route: Route }) => {
    return (
      <div onClick={getNavHelper(doUpdateUrl)}>
        <Route />
        <Modal />
      </div>
    );
  }
);

export default Main;
