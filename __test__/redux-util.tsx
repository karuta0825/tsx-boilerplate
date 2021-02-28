import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Store } from 'redux';
import { configureStore } from '../src/store';
import { Provider } from 'react-redux';

function render(
  ui: React.ReactElement,
  {
    initialState,
    store = configureStore(initialState),
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
