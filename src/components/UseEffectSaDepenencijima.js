import { useState, useEffect } from "react";

const UseEffectSaDepenencijima = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => {
      console.log("update");
      return count * 2;
    });
  }, [count]); // <- add the count variable here

  return (
    <>
      <h1>useEffect sa dependencijima</h1>
      <p>Count: {count}</p>
      <button
        onClick={() =>
          setCount((c) => {
            console.log("update");
            return c + 1;
          })
        }>
        +
      </button>
      <p>Calculation: {calculation}</p>
    </>
  );
};

export default UseEffectSaDepenencijima;
