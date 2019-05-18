const initialstate = {
    lang: 'en',
    location:'home'
}

let Reducers = (state = initialstate, action) =>{
    switch (action.type) {
        case 'SET_LANG':
            return{
                ...state,
                lang:action.payload
            }
            // break;
        case 'SET_LOC':
            return{
                ...state,
                location:action.payload
            }
        default:
            return state
            // break;
    }
}

export default Reducers;