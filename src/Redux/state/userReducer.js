const initialstate = {
    user:'Muhammad Firdaus',
    email:'mbex71@gmail.com',
    password:'',
    islogin:false
}


let Reducers = (state = initialstate, action) =>{
    switch (action.type) {
        case 'GET_USER':{
            return{
                ...state,
                lang:action.payload
            }
            
        }
            
        default:
            return state
            
    }
}

export default Reducers;