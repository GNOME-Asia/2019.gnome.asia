export function doRegister(name,email,phone,password,asal,amount,tshirt,ticket,ktm){
//   console.log(ktm)
    return {
        type:"FETCH_REGISTER",
        name:name,
        email:email,
        phone: phone,
        password:password,
        asal: asal,
        amount: amount,
        tshirt: tshirt,
        ticket: ticket,
        ktm: ktm
    }

    
    
}


export function verifyUser(token){  
     
    return {
        type:"VERIFY_USER",
        token: token
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