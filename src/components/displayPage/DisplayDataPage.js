import "./DisplayDataPage.css";
import Charts from "./Charts";
import DisplayVideo from "./DisplayVideo";

function DisplayDataPage(props) {
  const { videos, data } = props;

  return (
    <div className="container text-center">
      <Charts data={data} />
      <DisplayVideo videos={videos} />
    </div>
  );
}
export default DisplayDataPage;
