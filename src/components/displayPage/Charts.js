import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

Chart.register(CategoryScale);

function Charts(props) {
  const { data } = props;
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white w-100">
      <div className="card-header">
        <h2 style={{ color: "rgb(75, 192, 192)" }}>
          The Number Of Customers: {data.total_customers}
        </h2>
        <h2 style={{ color: "rgb(75, 192, 192)" }}>
          The Average Stay Time Was: {data.avg_time}
        </h2>
      </div>
      <div className="card-body">
        <div className="row justify-content-around">
          <div className="col-5 card chart w-50">
            <LineChart peoplePerSec={data.people_per_second} />
          </div>
          <div className="col-5 card chart w-50">
            <BarChart timePerId={data.time_per_id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
