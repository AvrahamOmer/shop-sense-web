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
    console.log(videoOverLapping);
  };

  return (
    <div className="card">
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
