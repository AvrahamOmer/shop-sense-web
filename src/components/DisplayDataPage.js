import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import "./DisplayDataPage.css";

Chart.register(CategoryScale);

function DisplayDataPage(props) {
  const { videos, data } = props;

  return (
    <div className="container overflow-hidden text-center">
      <div className="row justify-content-center row-video">
        {videos.map((videoPath, index) => {
          return (
            <div className="col-6" key={index}>
              <video
                key={index}
                style={{ Width: "100%", height: "40rem" }}
                playsInline
                loop
                muted
                controls
                autoPlay
                typeof="video/mp4"
                alt="All the devices"
                s
                src={videoPath}
              />
            </div>
          );
        })}
      </div>
      <div className="row justify-content-around">
        <div className="col-4 card chart">
          <LineChart />
        </div>
        <div className="col-4 card chart">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
export default DisplayDataPage;
