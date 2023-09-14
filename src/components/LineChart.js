import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const dummyData = {
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 3,
    13: 3,
    14: 3,
    15: 3,
    16: 2,
    17: 2,
    18: 1,
    19: 1,
    20: 1,
    21: 0,
    22: 0,
  };

  const keysArray = Object.keys(dummyData);
  const valuesArray = Object.values(dummyData);

  const chartData = {
    labels: keysArray,
    datasets: [
      {
        label: "Number of people per second",
        data: valuesArray,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.0,
      },
    ],
  };
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of People per Second",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
