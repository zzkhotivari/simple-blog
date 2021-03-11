import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AppContextComponent } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContextComponent>
      <Router>
        <App />
      </Router>
    </AppContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
