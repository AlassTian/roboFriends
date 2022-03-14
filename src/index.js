import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import "./index.css"
import App from "./containers/App";
=======
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
>>>>>>> 700f74decc4f511c39788303e2a61bc3da137cdc

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

<<<<<<< HEAD
if (module.hot) {
  module.hot.accept();
}

=======
>>>>>>> 700f74decc4f511c39788303e2a61bc3da137cdc
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
