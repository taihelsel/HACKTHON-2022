import "./App.css";
import { testRoute } from "./API/index";

function App() {
  testRoute((msg) => {
    console.log("API MESSAGE", msg);
  });
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
