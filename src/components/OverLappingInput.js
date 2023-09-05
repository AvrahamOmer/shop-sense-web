function OverLappingInput() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Vidoe Name"
        aria-label="Vidoe Name"
      />
      <span className="input-group-text">-</span>
      <input
        type="text"
        className="form-control"
        placeholder="Coordinate"
        aria-label="Coordinate"
      />
    </div>
  );
}
export default OverLappingInput;
