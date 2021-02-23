import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sample } from '../src/Sample';

test('title propにタイトルを指定すると、documentに表示される', () => {
  render(<Sample title="タイトル" />);

  screen.debug();

  const elm = screen.getByText(/タイトル/);

  expect(elm).toBeInTheDocument();
});
