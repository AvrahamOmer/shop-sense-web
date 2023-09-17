import "./PlusButton.css";
function PlusButton(props) {
  const { setDataStore } = props;

  const addAnotherItem = () => {
    setDataStore((prevDataStore) => {
      return [...prevDataStore, {}];
    });
  };

  return (
    <div className="col-sm-6 text-center">
      <button
        className="Plus-Button btn bi bi-plus-square text-primary"
        onClick={addAnotherItem}
      ></button>
    </div>
  );
}

export default PlusButton;
