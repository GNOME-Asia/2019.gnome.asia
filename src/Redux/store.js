import { createStore,applyMiddleware,combineReducers } from 'redux';
import logger from 'redux-logger';
import Reducers from './Reducers';

const reducer = combineReducers({
    Reducers
})

const middleware = applyMiddleware(logger)

const store = createStore(reducer,middleware);

export default store;