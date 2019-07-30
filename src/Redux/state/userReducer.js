const initialstate = {
    name:'',
    email:'',
    islogin:false,
    loading: false,
    error:null
}


let Reducers = (state = initialstate, action) =>{
    switch (action.type) {
        case 'DO_REGISTER':{
            return{
                ...state,
                name:action.name,
                email:action.email,
                islogin:true,
                loading:false
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
                loading:false
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
                loading:false
            }
        }

        case 'AUTH_ERROR':{
            return{
                ...state,
                islogin:false,
                error:action.error,
                loading:false
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
                loading:false
            }
        }
            
        default:
            return state
            
    }
}

export default Reducers;