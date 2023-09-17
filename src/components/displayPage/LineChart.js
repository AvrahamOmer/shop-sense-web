import React from "react";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  const { peoplePerSec } = props;

  const keysArray = Object.keys(peoplePerSec);
  const valuesArray = Object.values(peoplePerSec);

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
              font: {
                size: 20,
              },
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
