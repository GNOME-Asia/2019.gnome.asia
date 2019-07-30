import { put,takeLatest,all } from 'redux-saga/effects';
// import Api from '../Settings/api';
import firebase from '../Settings/firebase';
// var _ = require('lodash');

function* fetchRegister(action){
    try {
        const [firebaseauth] = yield all([
            firebase.auth().createUserWithEmailAndPassword(action.email,action.password)   
            // call(Api.registration,action)    
        ])

        yield put({
            type:"DO_REGISTER",
            // name:resp.data.name,
            name:action.name,
            email:firebaseauth.user.email

        })

    } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
    }
}

function *islogin(action){
    
    try {
        
        const data = action.data
        // console.log("ANDA SEDANG LOGIN GAN!!",data)
        yield put({
            type:"IS_LOGIN",
            email:data.email,
            name:data.displayName

        })
    
    } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
    }
    
}

function* fetchLogout(){

   try {
    firebase.auth().signOut()
    // console.log(firebaseauth)

    yield put({
        type:"DO_LOGOUT"
    })


   } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
   }
}

function* fetchLogin(action){

    try {
        const [firebaseauth] = yield all([
            firebase.auth().signInWithEmailAndPassword(action.email,action.password)
        ])

        yield put({
            type:"DO_LOGIN",
            email:firebaseauth.user.email
        })
    } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
    }
    

}

function* mysaga(){
    yield takeLatest("FETCH_REGISTER",fetchRegister)
    yield takeLatest("VERIFY_USER",islogin)
    yield takeLatest("FETCH_LOGOUT",fetchLogout)
    yield takeLatest("FETCH_LOGIN",fetchLogin)
}

export default mysaga;