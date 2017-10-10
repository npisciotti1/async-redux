import reducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';

export default () => createStore(reducer, applyMiddleware(reporter));
