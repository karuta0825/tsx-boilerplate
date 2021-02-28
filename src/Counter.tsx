import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  const { value, fetchCounter } = useSelector((store: any) => store);
  const dispatch = useDispatch();

  const fetch = React.useCallback(() => {
    dispatch({ type: 'FETCH' });
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
