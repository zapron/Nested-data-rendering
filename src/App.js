import "./styles.css";
import data from "./react_problem";
// The {data} can be replaced with any kind of object/array
//The program will still render the key value pairs sepaerately

export default function App() {
  let keys = [];
  let values = [];

  // This function is responsible for rendering te key and value pairs seperately
  function renderData() {
    return (
      <div>
        <table>
          <td>
            <th>Keys in the data are</th>
            {keys.map((d) => (
              <tr
                style={{
                  background: "lightblue",
                  display: "inline-block",
                  width: "100%",
                  margin: "0",
                  padding: "0",
                  borderRadius: "0%"
                }}
              >
                {d}
              </tr>
            ))}
          </td>

          <td>
            <th>Values for the key on left are</th>
            {values.map((d) => (
              <tr
                style={{
                  background: "lightgreen",
                  display: "inline-block",
                  width: "100%",
                  margin: "0",
                  padding: "0",
                  borderRadius: "0"
                }}
              >
                {d}
              </tr>
            ))}
          </td>
        </table>
      </div>
    );
  }

  // This recursive function is responsible to iterate and form the tree of keys and values
  function dive(datad) {
    if (datad && typeof datad === "object") {
      for (let i = 0; i < Object.keys(datad).length; i++) {
        keys.push(Object.keys(datad)[i]);
        values.push("");
        dive(datad[Object.keys(datad)[i]]);
      }
    } else {
      values.push(datad);
      keys.push("");
    }
  }

  //Main component Logic for render
  return (
    <div className="App">
      <h2>Raw Data Received</h2>

      {JSON.stringify(data)}
      <hr />
      {data ? dive(data) : <p>No data</p>}
      {renderData()}
    </div>
  );
}
