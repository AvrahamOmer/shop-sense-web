function overLappingData(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.coordinate}</td>
    </tr>
  );
}

export default overLappingData;
