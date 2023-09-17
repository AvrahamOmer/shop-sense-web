import React, { useState } from "react";
import OverLappingInput from "./OverLappingInput";
import OverLappingData from "./OverLappingData";

function VideoData(props) {
  const [overLappingList, setOverLappingList] = useState([]);

  const videoNameChangeHandler = (event) => {
    props.onSaveVideoName(event.target.value);
  };

  const addOverLappingHandler = (overLapping) => {
    setOverLappingList((prevOverLappingList) => {
      return [...prevOverLappingList, overLapping];
    });
    props.onSaveVideoOverLapping(overLapping);
  };

  return (
    <div className="">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Video Name"
          aria-label="Video Name"
          onChange={videoNameChangeHandler}
        />
      </div>
      <OverLappingInput onAddOverLapping={addOverLappingHandler} />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Video Name</th>
            <th scope="col">Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {overLappingList.map((overLapping) => (
            <OverLappingData
              key={overLapping.id}
              id={overLapping.id}
              name={overLapping.name}
              coordinate={overLapping.coordinate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default VideoData;
