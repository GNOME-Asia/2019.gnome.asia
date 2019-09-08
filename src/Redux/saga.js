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

        const kenproject = yield call(Api.registration,data)
        
        const ken = kenproject.data
        console.log(ken)

        if(ken.error){
            yield put({
                type:"EMAIL_ALREADY_TAKEN",
                error:ken.error.email,
                islogin:false,
                loading: false
            })
        }
        else{
            //setLocalstorage
        localStorage.setItem('ken_token',ken.token)
        yield put({
            type:"DO_REGISTER",
            token:ken.token,
            name:ken.user.name,
            phone: ken.user.phone,
            verified: ken.user.email_verified_at,
            payments: ken.user.payments,
            email:ken.user.email,
            islogin:true,
            documents: ken.user.documents
        })
        }
        

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
            token: token,
            documents: kendata.documents

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
            verified: kendata.user.email_verified_at,
            documents: kendata.documents
        })
    } catch (error) {
        console.log("Error Login gan!")
        yield put({type:"AUTH_ERROR",error:error.message})
    }
    

}

function* recreateqr(action){
    try {

        if(localStorage.getItem('ken_token')){

            const kendata = yield call(Api.recreateqr,localStorage.getItem('ken_token'),action.userid)
            console.log(kendata)
            if(kendata.data.sukses){
                yield put({
                    type:"RECREATE_QRCODE_DONE"
                })
                window.location.reload()
            }
        }

    } catch (error) {
        console.log("Error Login gan!")
        yield put({
            type:"AUTH_ERROR",
            error:error.message
        })
    }
}

function* mysaga(){
    yield takeLatest("FETCH_REGISTER",fetchRegister)
    yield takeLatest("VERIFY_USER",islogin)
    yield takeLatest("FETCH_LOGOUT",fetchLogout)
    yield takeLatest("FETCH_LOGIN",fetchLogin)
    yield takeLatest("RECREATE_QRCODE",recreateqr)
}

export default mysaga;