import firebase from 'firebase'

export const logIn = (credentials) => {
    return async (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            console.log("Login Successful")
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            console.log(err)
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    };
}

export const logOut = () => {
    return (dispatch, getState) => {        
        firebase.auth().signOut().then( () => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}

export const register = (newUser) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type:'REGISTER_SUCCESS' })
        }).catch(err => {
            dispatch({ type:'REGISTER_ERROR', err })
        })
    }
}