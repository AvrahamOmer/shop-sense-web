import React, { useState } from "react";
import OverLappingInput from "./OverLappingInput";

function VideoData() {
  const [enteredVideoName, setenteredVideoName] = useState("");
  const [componentCount, setComponentCount] = useState(1);

  const videoNameChangeHandler = (event) => {
    setenteredVideoName(event.target.value);
  };

  const addComponent = () => {
    setComponentCount((prev) => {
      return prev + 1;
    });
  };

  const saveOverLappingData = (overLappingObject) => {
    console.log(overLappingObject);
  };

  const components = [];
  for (let i = 0; i < componentCount; i++) {
    components.push(
      <OverLappingInput
        onSaveOverLappingData={saveOverLappingData}
        id={i}
        key={i}
      />
    );
  }

  return (
    <div className="">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Vidoe Name"
          aria-label="Vidoe Name"
          onChange={videoNameChangeHandler}
        />
      </div>
      {components}
      <button className="btn btn-primary" onClick={addComponent}>
        Add One More
      </button>
    </div>
  );
}
export default VideoData;
