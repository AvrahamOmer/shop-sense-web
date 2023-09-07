import "bootstrap/dist/css/bootstrap.css";
import Item from "./components/Item";
import React, { useState } from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [dataStore, setDataStore] = useState([{}, {}]);

  const updateName = (name, index) => {
    return setDataStore((prevDataStore) => {
      return [
        ...prevDataStore.slice(0, index),
        {
          ...prevDataStore[index],
          name: name,
        },
        ...prevDataStore.slice(index + 1),
      ];
    });
  };

  const updateFile = (file, index) => {
    return setDataStore((prevDataStore) => {
      return [
        ...prevDataStore.slice(0, index),
        {
          ...prevDataStore[index],
          file: file,
        },
        ...prevDataStore.slice(index + 1),
      ];
    });
  };

  const updateCoordinate = (coordinateObject, index) => {
    return setDataStore((prevDataStore) => {
      return [
        ...prevDataStore.slice(0, index),
        {
          ...prevDataStore[index],
          overlapping: {
            ...prevDataStore[index].overlapping,
            [coordinateObject.name]: coordinateObject.coordinate,
          },
        },
        ...prevDataStore.slice(index + 1),
      ];
    });
  };

  const sendData = () => {
    console.log(dataStore);
  };

  const addAnotherItem = () => {
    setDataStore((prevDataStore) => {
      return [...prevDataStore, {}];
    });
  };

  return (
    <div>
      <h1>Shop Sense</h1>
      <div className="container">
        <div className="row">
          {dataStore.map((item, index) => {
            return (
              <div className="col-sm-6">
                <Item
                  key={index}
                  id={index}
                  onChangeName={updateName}
                  onChangeFile={updateFile}
                  onChangeCoordinate={updateCoordinate}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn btn-primary" onClick={sendData}>
        submit
      </button>
      <button className="btn btn-primary" onClick={addAnotherItem}>
        Add Another Item
      </button>
    </div>
  );
}

export default App;
