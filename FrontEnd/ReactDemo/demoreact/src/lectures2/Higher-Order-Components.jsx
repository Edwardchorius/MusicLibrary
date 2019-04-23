import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BookService from "../services/books-service";
import withDataFromService from "./hoc-with-data-from-service";

function BookList({ data, theme }) {
  if (!data.length) {
    return null;
  }

  return (
    <ul className={theme}>
      {data.map(book => (
        <li key={book.id}>Title: {book.title}</li>
      ))}
    </ul>
  );
}

export default withDataFromService(BookList, [], new BookService().getBooks);
