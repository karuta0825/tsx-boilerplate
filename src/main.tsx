import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Counter } from './Counter';

function App() {
  return (
    <Provider store={configureStore()}>
      <Counter />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
