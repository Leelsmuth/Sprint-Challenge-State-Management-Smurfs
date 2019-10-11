import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { smurfReducer, formReducer } from "./state/reducers";
import "./index.css";
import App from "./components/App";

const monsterReducer = combineReducers({
  smurfs: smurfReducer,
  form: formReducer
});

const store = createStore(
  monsterReducer,
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
