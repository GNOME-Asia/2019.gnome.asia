import { createStore,applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Reducers from './Reducers';
import mysaga from './saga';
import { verifyUser } from './action/userAction';
// import firebase from '../Settings/firebase';

const sagaMiddleware = createSagaMiddleware()

// const middleware = applyMiddleware(logger,sagaMiddleware)
const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(Reducers,middleware);
sagaMiddleware.run(mysaga)

//check user is login or not from Firebase
// firebase.auth().onAuthStateChanged(user => {
    
if(localStorage.getItem('ken_token')){
    const token = localStorage.getItem('ken_token')
    store.dispatch(verifyUser(token))
}
    
// })

export default store;