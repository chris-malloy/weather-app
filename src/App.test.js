import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import index from './reducers';
import { Provider as Prov } from 'react-redux';
import { createStore as crstr } from 'redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prov store={crstr(index)}><App /></Prov>, div);
  ReactDOM.unmountComponentAtNode(div);
});
