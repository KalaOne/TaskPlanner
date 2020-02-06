import firebase from 'firebase'

export const logIn = (credentials) => {
    return (dispatch, getState) => {

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            console.log("Login Successful")
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            console.log("Login FAILED")
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const logOut = () => {
    return (dispatch, getState) => {        
        firebase.auth().signOut().then( () => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}