import * as React from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as request from './request';

async function test() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 2000);
  });
}

const fetchCreator = () => {
  return async (dispatch: Dispatch) => {
    const r = await request.get('https://api.github.com/users/karuta0825/repos');
    console.log(r);
    dispatch({ type: 'FETCHED', payload: r });
  };
};

export const Counter = () => {
  const { value, fetchCounter } = useSelector((store: any) => store);
  const dispatch = useDispatch();

  const fetch = React.useCallback(() => {
    dispatch(fetchCreator());
  }, [fetchCounter]);

  return (
    <div>
      <div data-testid="counter-value">{value}</div>
      <button onClick={() => dispatch({ type: 'INC' })}>plus</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      <button onClick={fetch}>fetch</button>
      <div data-testid="fetch-counter-value">fetched:{fetchCounter}</div>
    </div>
  );
};
