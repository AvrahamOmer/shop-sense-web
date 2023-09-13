import React, { useState } from "react";
import JSZip from "jszip";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import CollectDataPage from "./components/CollectDataPage";
import DisplayDataPage from "./components/DisplayDataPage";
// import DisplayDataPage from "./components/DisplayDataPage";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [dataStore, setDataStore] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoUrls, setVideoUrls] = useState([]);

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

      await Promise.all(
        Object.values(zip.files).map(async (file) => {
          if (file.name.endsWith(".mp4")) {
            const videoData = await file.async("blob");
            const videoUrl = URL.createObjectURL(videoData);
            videoUrls.push(videoUrl);
          }
        })
      );

      setVideoUrls(videoUrls);
      console.log(videoUrls);
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

  if (videoUrls.length > 0) {
    console.log(videoUrls);
    content = <DisplayDataPage videos={videoUrls} />;
  }

  return (
    <div>
      <Header />
      <div className="container">{content}</div>
    </div>
  );
}

export default App;
