import { put,takeLatest,all,call } from 'redux-saga/effects';
import Api from '../Settings/api';
// import firebase from '../Settings/firebase';
// var _ = require('lodash');

function* fetchRegister(action){
    try {
        const [kenproject] = yield all([
            // firebase.auth().createUserWithEmailAndPassword(action.email,action.password),
            call(Api.registration,action)    
        ])

        console.log(kenproject.data)
        const ken = kenproject.data

        //setLocalstorage
        localStorage.setItem('ken_token',ken.token)

        yield put({
            type:"DO_REGISTER",
            token:ken.token,
            name:action.name,
            phone: ken.phone,
            verified: ken.email_verified_at,
            payments: [],
            email:ken.email
            // email:firebaseauth.user.email

        })

    } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
    }
}

function *islogin(action){
    
    try {
        
        const data = action.data
        const token = action.token
        // console.log("ANDA SEDANG LOGIN GAN!!",data)
        const ken = yield call(Api.checkLogin,token)
        const kendata = ken.data
        console.log(kendata)

        yield put({
            type:"IS_LOGIN",
            email:data.email,
            name:kendata.user.name,
            phone: kendata.user.phone,
            verified: kendata.user.email_verified_at,
            payments: kendata.payments,
            token: token

        })
    
        
    
    } catch (error) {
        yield put({type:"AUTH_ERROR",error:error.message})
    }
    
}

function* fetchLogout(){

   try {
    // firebase.auth().signOut()
    if(localStorage.getItem('ken_token')){
        yield call(Api.logout,localStorage.getItem('ken_token'))
        // console.log(kenlogout.data)
        localStorage.removeItem('ken_token')
    }
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
        const [kenproject] = yield all([
            // firebase.auth().signInWithEmailAndPassword(action.email,action.password),
            call(Api.login,action)
        ])
        // console.log(kenproject)
        localStorage.setItem('ken_token',kenproject.accessToken)
        yield put({
            type:"DO_LOGIN",
            // email:firebaseauth.user.email,
            email: kenproject.user.email,
            token: kenproject.accessToken,
            name: kenproject.user.name,
            phone:kenproject.user.phone,
            payments:kenproject.payments,
            verified: kenproject.email_verified_at
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