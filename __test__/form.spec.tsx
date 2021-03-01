import React from 'react';
import { screen, render, fireEvent, act } from '@testing-library/react';
import { Form } from '../src/Form';

it('名前が空白で送信ボタンを押すと、エラーが表示される', async () => {
  render(<Form />);

  expect(screen.getByLabelText('名前')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

  await screen.findByText(/名前いれんと/);
});

it('名前いれるよ', async () => {
  render(<Form />);

  // テキスト入力
  fireEvent.change(screen.getByLabelText('名前'), { target: { value: 'Pooh' } });
  // ラジオボタンクリック
  fireEvent.click(screen.getByLabelText('女'));
  // テキスト入力
  fireEvent.change(screen.getByLabelText('年齢'), { target: { value: 20 } });

  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

  const name = await screen.findByLabelText('名前');
  const age = await screen.findByLabelText('年齢');
  expect(name).toHaveValue('Pooh');
  expect(age).toHaveValue(20);

  // screen.debug();
});
