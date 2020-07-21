import { firebase, googleAuthProvider } from '../firebase/firebase';

/// action object and return thunk function for Login
export const login = (uid) => ({
    type:'LOGIN',
    uid
});

export const fxLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
}

/// action object and return thunk function for Logout
export const logout = () =>({
    type:'LOGOUT'
});

export const fxLogout = () => {
    return () =>{
        return firebase.auth().signOut();
    }
}