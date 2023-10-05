import PropTypes from 'prop-types';
import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/Firebase';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

    },)[]


    const authData = {
        createAccount,
        signIn
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
