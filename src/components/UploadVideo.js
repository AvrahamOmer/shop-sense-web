import React, { useRef, useState } from "react";
import "./UploadVideo.css";

function UploadVideo(props) {
  const inputRef = useRef();

  const [source, setSource] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    props.onUploadVidoe(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleChoose}
        >
          Choose Video
        </button>
      )}
      {source && (
        <video className="" width="100%" height={300} controls src={source} />
      )}
    </div>
  );
}
export default UploadVideo;
