import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import {Provider} from "react-redux";
import counter from './reducers/index'
import App from './App';
const store = createStore(counter)




ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
