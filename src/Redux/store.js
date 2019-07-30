import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Reducers from './Reducers';
import mysaga from './saga';
import { verifyUser } from './action/userAction';
import firebase from '../Settings/firebase';

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(logger,sagaMiddleware)

const store = createStore(Reducers,middleware);
sagaMiddleware.run(mysaga)

firebase.auth().onAuthStateChanged(user => {
    if(user){
        
        store.dispatch(verifyUser(user))
    }
    
})

export default store;