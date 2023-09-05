import React, { useState } from "react";

function OverLappingInput(props) {
  const [overLapping, setOverLapping] = useState({
    id: props.id,
    videoName: "",
    coordinate: "",
  });

  const handleNameChange = (event) => {
    setOverLapping((prevState) => {
      return { ...prevState, videoName: event.target.value };
    });
    props.onSaveOverLappingData(overLapping);
  };

  const handleCoordinateChange = (event) => {
    setOverLapping((prevState) => {
      return { ...prevState, coordinate: event.target.value };
    });
    props.onSaveOverLappingData(overLapping);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Video Name"
        aria-label="Video Name"
        onChange={handleNameChange}
      />
      <span className="input-group-text">-</span>
      <input
        type="text"
        className="form-control"
        placeholder="Coordinate"
        aria-label="Coordinate"
        onChange={handleCoordinateChange}
      />
    </div>
  );
}
export default OverLappingInput;
