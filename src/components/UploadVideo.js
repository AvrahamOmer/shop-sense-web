import React, { useRef, useState } from "react";
import "./UploadVideo.css";

function UploadVideo() {
  const inputRef = useRef();

  const [source, setSource] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <video className="" width="100%" height={300} controls src={source} />
      )}
      <div className="">{source || "Nothing selectd"}</div>
    </div>
  );
}
export default UploadVideo;
