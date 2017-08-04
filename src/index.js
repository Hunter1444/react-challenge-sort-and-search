import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function getJSON(url){
  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(user){
      let new_array = [];
      user.forEach(function(item){
        new_array.push(item)
      })
      store.dispatch({
        type: 'NEW_JSON',
        payload: new_array
      })
      return user;
    })
}

getJSON('data.json');
//
const initialState = [];


function humanlist(state = initialState, action){
    if(action.type === 'ADD_HUMAN'){
      return[
        ...state,
        action.payload
      ]
    } else if(action.type === 'ORDER_SORT'){
      return[
        ...state
      ]
    } else if(action.type === "INDEX_SORT"){
      return[
        ...state
      ]
    } else if(action.type === 'NEW_JSON'){
      return (
        action.payload
      )
    }
    return state;
  }

const store = createStore(humanlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe(() => {
  console.dir(store.getState())
})
