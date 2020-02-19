import "react-app-polyfill/ie9";
import "core-js";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger'
import reducers from "./store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./modules/App";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers,composeWithDevTools( applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
