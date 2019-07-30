
export function doRegister(name,email,password){
//   console.log(data)
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    return {
        type:"FETCH_REGISTER",
        name:name,
        email:email,
        password:password
    }
}


export function verifyUser(user){  
     
    return {
        type:"VERIFY_USER",
        data: user
    }
}

export function doLogin(email,password){
    return{
        type:"FETCH_LOGIN",
        email:email,
        password:password
    }
}



export function doLogout(){
    return{
        type:"FETCH_LOGOUT"
    }
}