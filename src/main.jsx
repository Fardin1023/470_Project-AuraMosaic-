import React from "react";
import {store} from "./redux/slices/store.js"
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
        <App/>
    </Provider>
  
);
