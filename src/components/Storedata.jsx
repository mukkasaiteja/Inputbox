import {applyMiddleware, legacy_createStore} from 'redux'
import red from './Red';
import logger from 'redux-logger';

const Myredux=legacy_createStore(red,applyMiddleware(logger));
 
export default Myredux;