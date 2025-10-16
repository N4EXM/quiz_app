import React, { createContext, useContext, useState, useEffect } from 'react';
import userImg from '../assets/images/user.png'



const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new console.error("useAuth must be used with an AuthProvier");
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    // state
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    // const [user, setUser] = useState(null)
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johnDoe@example.com",
        profileImg: userImg,
    })


    useEffect(() => {

        const checkAuthStatus = () => {
            
            const token = localStorage.getItem("authToken")
            
        }

    }, [])

    // for now
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, (2000))
    })

    const value = {
    isAuthenticated,
    isLoading,
    user,
    // login,
    // logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

}