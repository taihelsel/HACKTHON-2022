import "./App.css";
import { testRoute } from "./API/index";
import DashBoard from "./DashBoard";
import HeatMap from "./HeatMap";

function App() {
  testRoute((msg) => {
    console.log("API MESSAGE", msg);
  });
  return (
    <>
      <div className="App">Hello world</div>
      <h1>hi</h1>
      <h2>This is the Upload Place Holder</h2>
      <DashBoard />
      <HeatMap />
    </>
  );
}

export default App;
