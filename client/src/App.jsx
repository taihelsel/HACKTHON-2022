import "./App.css";
import { testRoute } from "./API/index";
import UploadUser from "./pages/upload/Upload";

function App() {
  testRoute((msg) => {
    console.log("API MESSAGE", msg);
  });
  return (
    <div className="App">
      Hello world
      <div />
      <div>
        <UploadUser />
      </div>
    </div>
  );
}

export default App;
