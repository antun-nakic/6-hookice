import SamoState from "./components/SamoState";
import UseEffectSaCleanupom from "./components/UseEffectSaCleanupom";
import UseEffectSaDepenencijima from "./components/UseEffectSaDepenencijima";
import Kontekst from "./components/Kontekst";
import UseReducerPrimjer from "./components/UseReducerPrimjer";

import "./App.css";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className='App'>
      <SamoState />
      <hr />
      <UseEffectSaCleanupom />
      <hr />
      <UseEffectSaDepenencijima />
      <hr />
      <Kontekst />
      <hr />
      <UseRef />
      <hr />
      <UseReducerPrimjer />
      <hr />
    </div>
  );
}

export default App;
