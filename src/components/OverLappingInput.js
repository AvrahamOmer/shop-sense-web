import React, { useState } from "react";

function OverLappingInput(props) {
  const [overLappingName, setOverLappingName] = useState("");
  const [overLappingCoordinate, setOverLappingCoordinate] = useState("");
  const [currentId, setCurrentId] = useState(1);

  const handleNameChange = (event) => {
    setOverLappingName(event.target.value);
  };

  const handleCoordinateChange = (event) => {
    setOverLappingCoordinate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const overLappingData = {
      id: currentId,
      name: overLappingName,
      coordinate: overLappingCoordinate,
    };
    props.onAddOverLapping(overLappingData);
    setCurrentId((Prev) => Prev + 1);
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
          placeholder="Coordinates"
          aria-label="Coordinates"
          value={overLappingCoordinate}
          onChange={handleCoordinateChange}
        />
      </div>
      <div className="text-center">
        <button
          className="Custome-Button btn bi bi-plus-square text-primary"
          style={{ fontSize: "50px" }}
          type="submit"
        ></button>
      </div>
    </form>
  );
}

export default OverLappingInput;
