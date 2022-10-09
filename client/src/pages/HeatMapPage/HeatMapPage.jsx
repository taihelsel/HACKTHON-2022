import "./HeatMapPage.css";
import "../../App.css";
/* eslint-disable*/
import HeatMap from "./components/HeatMap";
import TopTickets from "./components/TopTickets";

export default function HeatMapPage() {
  return (
    <div className="App">
      <HeatMap />
      <TopTickets />
    </div>
  );
}
