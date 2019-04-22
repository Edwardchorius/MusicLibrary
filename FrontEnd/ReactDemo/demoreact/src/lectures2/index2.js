import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BookList from "./Higher-Order-Components/BookList";
import StarWarsList from "./Higher-Order-Components/StarWarsList";

ReactDOM.render(
  <Fragment>
    <BookList />
    <StarWarsList />
  </Fragment>,
  document.getElementById("root")
);
