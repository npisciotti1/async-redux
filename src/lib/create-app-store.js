import reducer from '../reducer';

import thunk from './redux-thunk';
import reporter from './redux-reporter';
import {createStore, applyMiddleware} from 'redux';

let createAppStore = () => createStore(reducer, applyMiddleware(thunk, reporter));

export default createAppStore;
