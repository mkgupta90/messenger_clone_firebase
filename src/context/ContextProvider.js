import { createContext, useEffect, useState} from 'react';
import { auth } from '../config';
import firebase from 'firebase';

// Create Context
export const ContextProvider = createContext();

// Create Context Component
const ContextComponent = (props) => {
    // State
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Register
    const register = () => {
        const firebaseProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(firebaseProvider).then( () => {
            firebase.auth().signInWithRedirect(firebaseProvider);
        })
    };

    // Logout
    const logout = () => {
        auth.signOut().then( () => {
            setUser(null);
        })
    }

    useEffect( () => {
        auth.onAuthStateChanged( (user) => {
            setUser(user);
            setLoader(false);
        })
    }, [])

    console.log(user);

    return(
        <ContextProvider.Provider value={{ register, user, loader, logout }}>
            {props.children}
        </ContextProvider.Provider>
    )
}

export default ContextComponent;