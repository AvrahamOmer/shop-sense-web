import React, { useState } from "react";

function OverLappingInput(props) {
  const [overLappingName, setOverLappingName] = useState("");
  const [overLappingCoordinate, setOverLappingCoordinate] = useState("");

  const handleNameChange = (event) => {
    setOverLappingName(event.target.value);
  };

  const handleCoordinateChange = (event) => {
    setOverLappingCoordinate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const overLappingData = {
      id: Math.random(),
      name: overLappingName,
      coordinate: overLappingCoordinate,
    };
    props.onAddOverLapping(overLappingData);
    setOverLappingName("");
    setOverLappingCoordinate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Video Name"
          aria-label="Video Name"
          value={overLappingName}
          onChange={handleNameChange}
        />
        <span className="input-group-text">-</span>
        <input
          type="text"
          className="form-control"
          placeholder="Coordinate"
          aria-label="Coordinate"
          value={overLappingCoordinate}
          onChange={handleCoordinateChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add One More
      </button>
    </form>
  );
}

export default OverLappingInput;
