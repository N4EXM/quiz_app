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
    const [token, setToken] = useState(localStorage.getItem('auth_token'));

    // ✅ Automatically login user if token exists
    useEffect(() => {
        const autoLogin = async () => {
            const storedToken = localStorage.getItem('auth_token');
            const storedUser = localStorage.getItem('user');

            if (storedToken && storedUser) {
                try {
                    // Verify token is still valid by fetching user data
                    const response = await fetch('api/user', {
                        headers: {
                            'Authorization': `Bearer ${storedToken}`,
                            'Accept': 'application/json',
                        }
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log("it worked")
                        setUser(data.user);
                        setToken(storedToken);
                    } else {
                        // Token is invalid, clear storage
                        logout();
                    }
                } catch (error) {
                    console.error('Auto-login failed:', error);
                    logout();
                }
            }
            setIsLoading(false);
        };

        autoLogin();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            
            console.log(data)

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // ✅ Save token and user data
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            setUser(data.user);
            setToken(data.token);

            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (userData) => {
        try {
            const response = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            // ✅ Auto-login after registration
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            setUser(data.user);
            setToken(data.token);

            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        if (token) {
            try {
                await fetch('/api/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    }
                });
            } catch (error) {
                console.error('Logout error:', error);
            }
        }

        // Clear everything
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    const value = {

        // state
        isAuthenticated: !!user && !!token,
        isLoading,
        user,

        // setters
        setIsAuthenticated,
        setIsLoading,
        setUser,

        // functions
        login,
        register,
        logout,
        

    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}