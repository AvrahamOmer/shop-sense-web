import "bootstrap/dist/css/bootstrap.css";
import Item from "./components/Item";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const items = [
    {
      id: 1,
      file: "video 1",
      name: "front",
      overlapping: {
        first: [100, 200, 300, 400],
      },
    },
    {
      id: 2,
      file: "vidoe 2",
      name: "store",
      overlapping: {
        first: [100, 200, 300, 400],
      },
    },
  ];
  return (
    <div>
      <h1>Shop Sense</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Item
              name={items[0].name}
              file={items[0].file}
              overlapping={items[0].overlapping}
            />
          </div>
          <div className="col-sm-6">
            <Item
              name={items[1].name}
              file={items[1].file}
              overlapping={items[1].overlapping}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
