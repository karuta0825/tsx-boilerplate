import * as React from 'react';
import { render, fireEvent, screen } from './redux-util';
import { Counter } from '../src/Counter';

test('+ボタンをクリックすると、表示されている値が+1される', () => {
  render(<Counter />, { initialState: { value: 1 } });

  const value = screen.getByTestId('counter-value');

  expect(value).toHaveTextContent('1');

  fireEvent.click(screen.getByText('+'));

  expect(value).toHaveTextContent('2');
});
