import React from "react";
import StarWarsService from "../services/star-wars-service";
import withDataFromService from "./hoc-with-data-from-service";

const StarWarsList = ({ data: characters }) => {
  const { characters, error } = this.state;

  if (!characters.length) {
    return null;
  }

  return (
    <ul>
      {characters.map(ch => {
        <li key={ch.url}>Name: {ch.name}</li>;
      })}
    </ul>
  );
};

export default withDataFromService(
  StarWarsList,
  [],
  new StarWarsService().getStarWarsCharacters
);
