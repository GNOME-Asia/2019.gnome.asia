import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Reducers from './Reducers';

const middleware = applyMiddleware(logger)

const store = createStore(Reducers,middleware);

export default store;