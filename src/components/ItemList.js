import React from "react";
import Item from "./Item";
import PlusButton from "./PlusButton";

function ItemList(props) {
  const { dataStore, setDataStore } = props;

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

  return (
    <div className="row">
      {dataStore.map((_, index) => {
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
      <PlusButton setDataStore={setDataStore} />
    </div>
  );
}
export default ItemList;
