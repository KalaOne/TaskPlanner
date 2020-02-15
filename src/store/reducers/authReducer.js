const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR' :
            console.log("LOGIN ERROR .....");
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS' :
            console.log(' login successful');
            return {
                ...state,
                authError : null
            }
        case 'LOGOUT_SUCCESS' :
            console.log("logout completed");
            return {
                state
            }
        case 'REGISTER_SUCCES' :
            console.log("register successful");
            return{
                ...state,
                authError: null
            }
        case 'REGISTER_ERROR' :
            console.log("register failed")
            return{
                ...state,
                authError: action.err.message
            }
        default :
            return state;
    }
}

export default authReducer