import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import {Provider} from 'react-redux'


const defaultState = {
  cash: 0,
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_CASE":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASE":
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}

const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

