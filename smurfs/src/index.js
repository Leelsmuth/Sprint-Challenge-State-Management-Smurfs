import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import "./index.css";
import App from "./components/App";

const store = createStore(
  reducers.storeReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
