import { useState, useEffect } from "react";

let timer;

function UseEffectSaCleanupom() {
  const [count, setCount] = useState(0);

  const resetirajTimer = () => {
    timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  useEffect(() => {
    console.log("izvrsen use effect");

    return () => {
      console.log("izvrsena cleanup funkcija");
      if (count % 2) {
        console.log("ubijen interval");
        clearInterval(timer);
      }
    };
  }, [count]);

  return (
    <div>
      <h1>useEffect sa cleanup funkcijom</h1>
      <h1>I've rendered {count} times!</h1>
      <button onClick={() => resetirajTimer()}>Resetiraj timer</button>
    </div>
  );
}

export default UseEffectSaCleanupom;

/**
 * 1. montira se ova komponenta u dom
 * 2. poziv useEffecta - postavlja se interval koji podize stanje za 1 svake sekunde
 *                     - vraca funkcija (cleanup funkcija) koja bi trebala biti pozvana
 *                        svaki put prije re-renderiranja
 * 3. rerender, međutim bez pokretanja cleanup funkcije
 *
 *
 */
