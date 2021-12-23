import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./scss/box.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);
