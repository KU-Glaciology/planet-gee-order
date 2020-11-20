import React from "react";
import { Provider } from "redux-bundler-react";
import Main from "./app-components/main";

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
