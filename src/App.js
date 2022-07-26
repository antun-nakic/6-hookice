import SamoState from "./components/SamoState";
import UseEffectSaCleanupom from "./components/UseEffectSaCleanupom";
import UseEffectSaDepenencijima from "./components/UseEffectSaDepenencijima";
import Kontekst from "./components/Kontekst";
import UseReducerPrimjer from "./components/UseReducerPrimjer";
import TodoApp from "./components/Todo/TodoApp";
import UseMemoPrimjer from "./components/UseMemoPrimjer";
import Home from "./components/customHookica/Home";
import Prikaz from "./components/hoc/Prikaz";

import "./App.css";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className='App'>
      <Prikaz />
      <hr />
      <Home />
      <hr />
      <UseMemoPrimjer />
      <hr />
      <TodoApp />
      <hr />
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
