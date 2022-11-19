import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import  app  from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    //create user with password auth;
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin using pass;
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //setting observer for getting user;
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(`User Observing...`);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();//user create hoile oidate observe kore and upore state er vitore set kore dey and kaj sesh kore

    }, [])

    //for logging out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //update user profile
    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo);
    }

    const authInfo = { 
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        loading
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
