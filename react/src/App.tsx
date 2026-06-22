import { useState } from "react";
import "./App.css";

function App(props) {
  const { data } = props;
  const { name = data.name } = data;
  return (
    <>
      <h1 style={{ marginTop: "300px" }}>{name}</h1>
    </>
  );
}

export default App;
