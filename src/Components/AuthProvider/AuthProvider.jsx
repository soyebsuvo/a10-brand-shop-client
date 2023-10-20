import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../Firebase/firebase.config"
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    
    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const login = (email , password ) => {
        setLoading(true);
        return signInWithEmailAndPassword(email , password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return  signInWithPopup(auth , githubProvider)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (name , photo) => {
        return updateProfile(auth.currentUser , {
            displayName : name , 
            photoURL : photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user , loading , createUser , login , googleLogin , githubLogin , logOut , updateUser}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
    children : PropTypes.node
}