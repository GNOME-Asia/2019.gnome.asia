const initialstate = {
    name:'',
    email:'',
    phone:'',
    payments:[],
    verified:null,
    islogin:false,
    loading: false,
    token: null,
    error:null,
    errmsg:null
}


let Reducers = (state = initialstate, action) =>{
    switch (action.type) {
        case 'DO_REGISTER':{
            return{
                ...state,
                name:action.name,
                email:action.email,
                token: action.token,
                loading:false,
                phone: action.phone,
                verified: action.verified,
                islogin:true,
                payments:action.payments
            }
        }
        case 'FETCH_REGISTER':{
            return{
                ...state,
                loading:true,
                error:null
            }
        }

        case 'FETCH_LOGIN':{
            return{
                ...state,
                loading:true,
                error:null
            }
        }
        case 'DO_LOGIN':{
            return{
                ...state,
                email:action.email,
                password:action.password,
                phone:action.phone,
                loading:false,
                islogin:true,
                verified: action.verified,
                payments: action.payments
            }
        }

        case 'VERIFY_USER':{
            return{
                ...state,
                loading:true,
                error:null
            }
        }

        case 'IS_LOGIN':{
            return{
                ...state,
                islogin:true,
                email:action.email,
                name:action.name,
                phone:action.phone,
                token: action.token,
                loading:false,
                verified: action.verified,
                payments:action.payments
            }
        }

        case 'AUTH_ERROR':{
            return{
                ...state,
                islogin:false,
                error:action.error,
                loading:false,
                errmsg: action.errmsg
            }
        }

        case 'FETCH_LOGOUT':{
            return{
                ...state,
                loading:true,
                error:null
            }
        }
        
        case "DO_LOGOUT":{
            return{
                ...state,
                islogin:false,
                token:null,
                user:'',
                email:'',
                loading:false,
                verified: null
            }
        }
            
        default:
            return state
            
    }
}

export default Reducers;