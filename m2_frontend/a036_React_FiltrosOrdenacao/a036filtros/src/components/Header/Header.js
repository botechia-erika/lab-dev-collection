import React from "react";
import { Container, Number } from "./styles";
import { useState } from "react";
const Header = ({ setSearchId }, { searchId }) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy"
  ];

  return (
    <Container>
      <Number
        type="number"
        placeholder="Buscar por id"
        value={searchId}
        onChange={(e) => {
          setSearchId(e.target.value);
        }}
        min="0"
        max="99"
      />
      <input type="text" placeholder="Buscar por Nome" />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
