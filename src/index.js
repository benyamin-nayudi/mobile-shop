import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit"
import {Provider } from "react-redux"
import productReducer, { productsFetch } from './features/productsSlice';


const store = configureStore({
  reducer: {
    products: productReducer,
  }
})

store.dispatch(productsFetch())

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


