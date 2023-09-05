import UploadVideo from "./UploadVideo";
import VideoData from "./VideoData";
function Item(props) {
  return (
    <div className="card">
      <UploadVideo />
      <div className="card-body">
        <VideoData />
      </div>
    </div>
  );
}
export default Item;
