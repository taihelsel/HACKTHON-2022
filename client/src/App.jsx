import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTicketPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Navbar Placeholder</h1>
        <Routes>
          <Route path="/" element={<CreateTicketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
