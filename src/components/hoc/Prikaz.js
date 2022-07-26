import React from "react";
import CollapseExpandExample from "./CollapseExpandExample";
import ViewEditToggleExample from "./ViewEditToggleExample";

const list = [
  { id: 1, name: "Eggs" },
  { id: 2, name: "Bread" },
];

const Prikaz = () => {
  return (
    <div>
      <h1>Primjer dvije HOC komponente</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CollapseExpandExample list={list} />
        <ViewEditToggleExample title='My first post' />
      </div>
    </div>
  );
};

export default Prikaz;
