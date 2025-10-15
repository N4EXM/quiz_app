import React, { createContext, useContext, useState, useEffect } from 'react';

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
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

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