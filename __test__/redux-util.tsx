import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from '../src/reducer';

function render(
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(counterReducer, initialState),
    ...renderOptions
  }: {
    initialState?: any;
    store?: Store;
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
