import ReactDOM from "react-dom";
import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/style.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import App from "./app"

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
