import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div onClick={(event: React.MouseEvent) => alert("tsx")}>Hello TSX</div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
