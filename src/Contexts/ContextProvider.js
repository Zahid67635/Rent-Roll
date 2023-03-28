import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()
const auth = getAuth(app)
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingState, setLoadingState] = useState(true);
    const createUser = (email, password) => {
        setLoadingState(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoadingState(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setLoadingState(true);
        return signOut(auth);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoadingState(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loadingState,
        googleSignIn,
        setLoadingState,
        verifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default ContextProvider;