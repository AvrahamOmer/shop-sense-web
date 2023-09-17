import React, { useState } from "react";
import JSZip from "jszip";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import CollectDataPage from "./components/collectPage/CollectDataPage";
import DisplayDataPage from "./components/displayPage/DisplayDataPage";

function App() {
  const [dataStore, setDataStore] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoUrls, setVideoUrls] = useState([]);
  const [resData, setResData] = useState(null);

  const sendData = async () => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    dataStore.forEach((item, index) => {
      formData.append(`file${index}`, item.file);
      let dataInfo = {
        name: item.name,
        overlapping: item.overlapping,
      };
      formData.append(`data${index}`, JSON.stringify(dataInfo));
    });

    try {
      const response = await fetch("http://localhost:5000/api/get_data", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const zipData = await response.blob();
      const zip = await JSZip.loadAsync(zipData);
      const videoUrls = [];

      const files = Object.values(zip.files);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.name.endsWith(".mp4")) {
          const videoData = await file.async("blob");
          const videoUrl = URL.createObjectURL(videoData);
          videoUrls.push(videoUrl);
        } else if (file.name.endsWith(".json")) {
          const jsonData = await file.async("text");
          const data = JSON.parse(jsonData);
          setResData(data);
        }
      }

      setVideoUrls(videoUrls);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = (
    <CollectDataPage
      dataStore={dataStore}
      setDataStore={setDataStore}
      sendData={sendData}
    />
  );

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (videoUrls.length > 0 && resData) {
    content = <DisplayDataPage videos={videoUrls} data={resData} />;
  }

  return (
    <div>
      <Header />
      <div className="container">{content}</div>
    </div>
  );
}

export default App;
