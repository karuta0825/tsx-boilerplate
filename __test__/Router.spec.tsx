import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';
import { Routes, Home } from '../src/Router';
import { Router, Switch, Route, Link } from 'react-router-dom';

it('/usersのとき、Homeボタン、Aboutボタンが表示される', () => {
  const history = createMemoryHistory();

  history.push('/users');

  const { getByRole } = render(<Routes history={history} />);

  expect(getByRole('button', { name: 'Home' })).toBeInTheDocument();
  expect(getByRole('button', { name: 'About' })).toBeInTheDocument();
});

it('/にいるときは、Usersボタン、Aboutボタンが表示される', () => {
  const history = createMemoryHistory();

  const { getByRole } = render(<Routes history={history} />);

  expect(getByRole('button', { name: 'Users' })).toBeInTheDocument();
  expect(getByRole('button', { name: 'About' })).toBeInTheDocument();
});

it('/にいるときはUsersボタンをクリックするとHomeボタンとAboutボタンが表示される', () => {
  const history = createMemoryHistory();

  const { getByRole } = render(<Routes history={history} />);

  fireEvent.click(getByRole('button', { name: 'Users' }));

  expect(getByRole('button', { name: 'Home' })).toBeInTheDocument();
  expect(getByRole('button', { name: 'About' })).toBeInTheDocument();
});

it('Usersボタンをクリックすると、Usersタイトルが表示される', () => {
  // historyの変更を確認することで正しくルーティングメソッドが機能しているかどうかを判定できる
  const history = createMemoryHistory();
  const { getByRole } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  fireEvent.click(getByRole('button', { name: 'Users' }));

  expect(history.entries[1].pathname).toEqual('/users');
});
