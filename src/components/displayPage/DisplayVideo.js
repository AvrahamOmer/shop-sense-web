function DisplayVideo(props) {
  const { videos } = props;
  return (
    <div className="row no-gutters justify-content-center row-video">
      {videos.map((videoPath, index) => {
        return (
          <div className="col-6" key={index}>
            <video
              className="w-100"
              key={index}
              style={{
                Width: "100%",
                height: "60rem",
              }}
              playsInline
              loop
              muted
              controls
              autoPlay
              typeof="video/mp4"
              alt="All the devices"
              s
              src={videoPath}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayVideo;
