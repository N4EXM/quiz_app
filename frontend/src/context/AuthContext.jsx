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
    const [user, setUser] = useState(null)
    // const [user, setUser] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     email: "johnDoe@example.com",
    //     profileImg: userImg,
    // })


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

    const handleUserLogin = async (email, password) => {
       
        const response = await fetch('/api/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept':  'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message)
        }

        console.log(data)

        localStorage.setItem('auth_token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        setIsLoading(false)
        setIsAuthenticated(true)
        
        navigate('/')

    }

    const value = {

        // state
        isAuthenticated,
        isLoading,
        user,

        // setters
        setIsAuthenticated,
        setIsLoading,
        setUser,

        // functions
        handleUserLogin


    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}