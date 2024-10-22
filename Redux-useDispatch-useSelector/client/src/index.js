


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let initialStore = {
  actors: [],
  crickters: [],
  politicians: [], // Fixed the typo here
};

let reducer = (latestStore = initialStore, dispatchedObj) => {
  console.log("inside the reducer");
  console.log(dispatchedObj);

if(dispatchedObj.type=="addActor"){
  return{...latestStore,actors:latestStore.actors.concat(dispatchedObj.data)};

}
else if(dispatchedObj.type =="addCrickter"){
  return{...latestStore,crickters:latestStore.crickters.concat(dispatchedObj.data)};
}
else if(dispatchedObj.type =="addPolitician"){
    return{...latestStore,politicians:latestStore.politicians.concat(dispatchedObj.data)};
}
  return latestStore;


  
};

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Adding Redux DevTools support
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

