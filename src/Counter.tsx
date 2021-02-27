import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  const { value } = useSelector((store: any) => store);
  const dispatch = useDispatch();

  return (
    <div>
      <div data-testid="counter-value">{value}</div>
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
    </div>
  );
};
