// import { updateCurrentUser } from 'firebase/auth';
import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChange(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, []);
    

    const value = {
        currentUser,
        signup
    }
  return(
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
  );
}
