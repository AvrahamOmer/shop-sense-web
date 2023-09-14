import React, { useEffect, useRef } from "react";

function DisplayDataPage(props) {
  const myObjectString = JSON.stringify(props.data, null, 2);

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        if (
          error.name === "NotAllowedError" ||
          error.name === "NotSupportedError"
        ) {
          console.log("Error attempting to play", error);
        } else if (error.name === "AbortError") {
          attemptPlay();
        }
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="row align-items-center">
        {props.videos.map((videoPath, index) => {
          return (
            <div
              className="col"
              key={index}
              style={{ display: "flex", justifyContent: "center", margin: "0" }}
            >
              <video
                style={{ maxWidth: "57%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                typeof="video/mp4"
                alt="All the devices"
                src={videoPath}
                ref={videoEl}
              />
            </div>
          );
        })}
      </div>
      <pre>{myObjectString}</pre>
    </div>
  );
}
export default DisplayDataPage;
