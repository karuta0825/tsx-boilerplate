import * as React from 'react';
import { render, fireEvent, screen, waitFor } from './redux-util';
import { Counter } from '../src/Counter';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as request from '../src/request';

const server = setupServer(
  // 外部APIでもmockすることができる
  rest.get('https://api.github.com/users/karuta0825/repos', (req, res, ctx) => {
    return res(ctx.json({ test: 'test' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('+ボタンをクリックすると、表示されている値が+1される', () => {
  render(<Counter />, { initialState: { value: 10 } });

  const value = screen.getByTestId('counter-value');

  expect(value).toHaveTextContent('10');

  const plus = screen.getByText(/plus/);

  fireEvent.click(plus);

  expect(value).toHaveTextContent('11');
});

test('fetchボタンをクリックすると、github情報が取得できる', async () => {
  let spy = jest.spyOn(request, 'get');

  render(<Counter />, { initialState: { value: 10, fetchCounter: 0 } });

  fireEvent.click(screen.getByText('fetch'));

  await waitFor(() => {
    expect(spy).toHaveBeenCalledTimes(1);
  });

  const elm = await screen.findByTestId('fetch-counter-value');
  expect(elm).toHaveTextContent('fetched:1');
});
