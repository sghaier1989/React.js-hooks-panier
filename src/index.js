import React from "react";
import ReactDOM from "react-dom";
import App from './views'
import { Provider }  from 'react-redux'
import { store } from './src/lib/store'

ReactDOM.render(
<Provider store={store}>
    <App  />
</Provider>

, document.getElementById("root")
);// test

