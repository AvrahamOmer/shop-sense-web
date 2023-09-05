import React, { useState } from "react";
import OverLappingInput from "./OverLappingInput";

function VideoData() {
  const [enteredVideoName, setenteredVideoName] = useState("");
  const videoNameChangeHandler = (event) => {
    setenteredVideoName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

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
      <OverLappingInput />
    </div>
  );
}
export default VideoData;
