import * as React from "react";
import { Pagination } from "./Pagination";
import axios from "axios";

interface StateType {
  id: number;
  name: string;
  age: number;
}

interface ActionType {
  type: string;
  payload: StateType[];
}

const tableReducer: React.Reducer<StateType[], ActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return action.payload;
    }
    default:
      return state;
  }
};

// くるくるのやつを入れたいな。でもまだこらえよう。
// あえていれない。

const fetchData = async (dispatch: React.Dispatch<ActionType>) => {
  const res = await axios.get("/table");

  dispatch({ type: "FETCH_DATA", payload: res.data });
};

export const Table: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowP] = React.useState(15);
  const [content, dispatch] = React.useReducer(tableReducer, []);

  React.useEffect(() => {
    (async () => {
      await fetchData(dispatch);
    })();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>c1</th>
            <th>c2</th>
            <th>c3</th>
          </tr>
        </thead>
        <tbody>
          {content
            .filter(
              (v, i) => i > (page - 1) * rowsPerPage && i <= page * rowsPerPage
            )
            .map((item) => (
              <tr key={item.id} data-testid="rooo">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        count={content.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={setPage}
        onChangeRowsPerPage={setRowP}
      />
    </>
  );
};
