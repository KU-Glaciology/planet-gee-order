import React, { useState } from "react";
import { connect } from "redux-bundler-react";

const Login = connect(
  "doAuthSetPlanetApiKey",
  "doModalClose",
  "doStatusFetch",
  "selectAuthPlanetApiKey",
  ({
    doAuthSetPlanetApiKey,
    doModalClose,
    doStatusFetch,
    authPlanetApiKey: key,
  }) => {
    const [apiKey, setApiKey] = useState("");

    const save = () => {
      if (apiKey && apiKey !== key) doAuthSetPlanetApiKey(apiKey);
      doModalClose();
      doStatusFetch();
    };

    return (
      <div className="modal-content">
        <div className="modal-body">
          <p>Enter credentials here for the Planet Orders API</p>

          <div className="form-group">
            <label className="form-label">Planet API Key</label>
            <input
              className="form-control"
              type="text"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={save} className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }
);

export default Login;
