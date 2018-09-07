import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  console.log(store);
  window.getState = store.getState;
  window.store = store;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
