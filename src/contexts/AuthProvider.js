import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import  app  from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(null);

    //create user with password auth;
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin using pass;
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //setting observer for getting user;
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(`User Observing...`);
            setUser(currentUser);
        });

        return () => unsubscribe();//user create hoile oidate observe kore and upore state er vitore set kore dey and kaj sesh kore

    }, [])

    //for logging out
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = { 
        createUser,
        signIn,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
