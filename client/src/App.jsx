import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTicketPage } from "./pages";
import HeatMapPage from "./pages/HeatMapPage/HeatMapPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateTicketPage />} />
          <Route path="/heatmap" element={<HeatMapPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
