import reducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';
 
let createAppStore = () => createStore(reducer, applyMiddleware(reporter));

export default createAppStore;
