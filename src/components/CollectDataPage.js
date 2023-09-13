import ItemList from "./ItemList";
function CollectDataPage(props) {
  const { dataStore, setDataStore, sendData } = props;
  return (
    <div>
      <ItemList dataStore={dataStore} setDataStore={setDataStore} />
      <div className="container text-center">
        <button className="btn btn-primary btn-lg" onClick={sendData}>
          Get Results
        </button>
      </div>
    </div>
  );
}

export default CollectDataPage;
