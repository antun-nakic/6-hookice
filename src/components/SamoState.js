import { useState } from "react";

const SamoState = () => {
  const [brojac, setBrojac] = useState(0);
  const [superBotun, setSuperBotun] = useState({
    boja: "teal",
    text: "Ja sam super botun!",
  });

  const povecajBrojac = () => {
    setBrojac((prevState) => {
      return prevState + 1;
    });
  };

  const promijeniBotun = () => {
    setSuperBotun((prevState) => {
      if (prevState.boja === "teal") return { ...prevState, boja: "yellow" };
      else return { ...prevState, boja: "teal" };
    });
  };

  return (
    <div>
      <h1>Samo useState hookica</h1>
      <div>
        <p>Vrijednost brojača je {brojac}</p>
        <button onClick={() => povecajBrojac()}>Povećaj stanje brojač</button>
      </div>

      <div>
        <button
          style={{ backgroundColor: superBotun.boja }}
          onClick={() => promijeniBotun()}>
          {superBotun.text}
        </button>
      </div>
    </div>
  );
};

export default SamoState;
