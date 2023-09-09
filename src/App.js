import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./assets/logo.png";
import "./App.css";
import Item from "./components/Item";
import React, { useState } from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [dataStore, setDataStore] = useState([{}]);

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
      <header>
        <img src={logo} alt="Medal badge with a star" />
        <h1>Sense, Analyze, Succeed</h1>
        <p>Unleash the Power of AI Analytics for Your Store's Success</p>
      </header>
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
          <div className="col-sm-6 text-center">
            <button
              className="Plus-Button btn bi bi-plus-square text-primary"
              onClick={addAnotherItem}
            ></button>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <button className="btn btn-primary btn-lg" onClick={sendData}>
          Get Results
        </button>
      </div>
    </div>
  );
}

export default App;
