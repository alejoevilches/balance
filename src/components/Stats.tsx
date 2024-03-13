import { Navbar } from "./Navbar";
import "./Stats.css"
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

export function Stats() {

  return (
    <>
      <Navbar />
      <div className="charts-container">
        <LineChart />
        <PieChart />
      </div>
    </>
  );
}