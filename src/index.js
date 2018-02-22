import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import index from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rp from 'redux-promise';

const store = applyMiddleware(rp)(createStore)(index);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
