import { put,takeLatest,call } from 'redux-saga/effects';
import Api from '../Settings/api';
// import firebase from '../Settings/firebase';
// var _ = require('lodash');

function* fetchRegister(action){
    try {
        console.log(action)
        // const [kenproject] = yield all([
        //     call(Api.registration,action)    
        // ])
        const data = new FormData()
        data.append('name',action.name)
        data.append('email',action.email)
        data.append('ktm',action.ktm)
        data.append('asal',action.asal)
        data.append('amount',action.amount)
        data.append('password',action.password)
        data.append('phone',action.phone)
        data.append('ticket',action.ticket)
        data.append('tshirt',action.tshirt)

        // console.log(data)

        

        const kenproject = yield call(Api.registration,data)
        
        console.log(kenproject)
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
        })

    } catch (error) {
        console.log(error.response)
        const errmsg = error.response.data.error
        yield put({
            type:"AUTH_ERROR",
            error:error.message,
            errmsg: errmsg
        })
    }
}

function *islogin(action){
    
    try {
        
        // const data = action.data
        const token = action.token
        // console.log("ANDA SEDANG LOGIN GAN!!",data)
        const ken = yield call(Api.checkLogin,token)
        const kendata = ken.data
        console.log(kendata)

        yield put({
            type:"IS_LOGIN",
            email:kendata.user.email,
            name:kendata.user.name,
            phone: kendata.user.phone,
            verified: kendata.user.email_verified_at,
            payments: kendata.payments,
            token: token

        })
    
        
    
    } catch (error) {
        console.log(error.response)
        localStorage.removeItem('ken_token')
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
        // const [kenproject] = yield all([
        //     // firebase.auth().signInWithEmailAndPassword(action.email,action.password),
        //     call(Api.login,action)
        // ])
        const kendata = yield call(Api.login,action)
        // const kendata = ken.data
        console.log(kendata)
        localStorage.setItem('ken_token',kendata.accessToken)
        yield put({
            type:"DO_LOGIN",
            email: kendata.user.email,
            token: kendata.accessToken,
            name: kendata.user.name,
            phone:kendata.user.phone,
            payments:kendata.payments,
            verified: kendata.user.email_verified_at
        })
    } catch (error) {
        console.log("Error Login gan!")
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