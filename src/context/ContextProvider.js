import { createContext, useEffect, useState} from 'react';
import { auth, db } from '../config';
import firebase from 'firebase';

// Create Context
export const ContextProvider = createContext();

// Create Context Component
const ContextComponent = (props) => {
    // User State
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Messages State
    const [allMsg, setAllMsg] =useState([]);

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

    // InputField data send  to firebase database 
    const sendMessage = (msg) => {
        //console.log("My message: ", msg);
        db.collection("messages").add({
            msg,
            photo: user.photoURL,
            username: user.displayName,
            email: user.email,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    useEffect( () => {
        auth.onAuthStateChanged( (user) => {
            setUser(user);
            setLoader(false);
        });

        // Fetch Messages(data) from firebase Database
        db.collection("messages").orderBy("currentTime", 'asc').onSnapshot( snap => {
            console.log("All Messages: ",snap.docs);

            // Looping of allMsg for individual document
            setAllMsg(
                snap.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            );
        })
    }, [])

    //console.log(user);
     console.log(allMsg);

    return(
        <ContextProvider.Provider 
            value={{ register, user, loader, logout, sendMessage, allMsg }}>
            {props.children}
        </ContextProvider.Provider>
    )
}

export default ContextComponent;