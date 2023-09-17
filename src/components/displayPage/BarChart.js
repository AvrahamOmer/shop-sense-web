import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const { timePerId } = props;

  const keysArray = Object.keys(timePerId);
  const valuesArray = Object.values(timePerId);

  const chartData = {
    labels: keysArray,
    datasets: [
      {
        label: "Stay Time per ID",
        data: valuesArray,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Stay Time per ID",
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

export default BarChart;
