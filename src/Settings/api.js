import env from './env';
import Axios from 'axios';

let baseURL = env.environtment === 'production' ? env.production : env.local ;

const connection = Axios.create({
    baseURL:baseURL,
    timeout:30000
})


const test = (param) => connection.get('/test',{
    params:{
        name:param.name,
        email:param.email,
        password:param.password,
        confirm:param.confirm
    }
}).then(resp=>{
    return resp.data
}).catch(e=>{
    return e
})

//Registration
const registration = (param) => connection({
    method:'post',
    url:'/registration',
    data:param
})

//Login
const login = (param) => connection({
    method:'post',
    url:'/login',
    data:param
}).then(resp=>{
    return resp.data
}).catch(err => {
    return err
})

const logout = (token) => connection({
    method:'post',
    url:'/logout',
    headers:{
        'Authorization': 'Bearer '+ token
    }
})

//Check Login

const checkLogin = (token) => connection({
    method:'get',
    url:'/user',
    headers:{
        'Authorization': 'Bearer '+ token
    }
})

const recreateqr = (token,userid) => connection({
    method:'post',
    url:'/recreateqr',
    headers:{
        'Authorization': 'Bearer '+token
    },
    data: {
        userid: userid
    }
})

const setexpired = (token,userid) => connection({
    method:'post',
    url:'/setexpired',
    headers:{
        'Authorization': 'Bearer '+token
    },
    data: {
        userid: userid
    }
})

export default{
    test,registration,login, checkLogin, logout, recreateqr,setexpired
}


