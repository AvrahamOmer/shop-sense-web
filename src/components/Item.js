import UploadVideo from "./UploadVideo";
import React from "react";
import VideoData from "./VideoData";
function Item(props) {
  const onSaveVideoHandler = (video) => {
    props.onChangeFile(video, props.id);
  };

  const onSaveVideoNameHandler = (videoName) => {
    props.onChangeName(videoName, props.id);
  };

  const onSaveVideoOverLappingHandler = (videoOverLapping) => {
    props.onChangeCoordinate(videoOverLapping, props.id);
  };

  return (
    <div className="card shadow-lg p-3 mb-5 bg-white">
      <UploadVideo onUploadVidoe={onSaveVideoHandler} />
      <div className="card-body">
        <VideoData
          onSaveVideoName={onSaveVideoNameHandler}
          onSaveVideoOverLapping={onSaveVideoOverLappingHandler}
        />
      </div>
    </div>
  );
}
export default Item;
