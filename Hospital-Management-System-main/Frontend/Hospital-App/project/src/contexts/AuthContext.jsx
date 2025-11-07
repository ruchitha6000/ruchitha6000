import {createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || "{}"));
    const [token, setToken] = useState(localStorage.getItem('access-token'));

    const refreshAuth = () => {
        setUser(JSON.parse(localStorage.getItem('user') || "{}"));
        setToken(localStorage.getItem('access-token'));
    }

    const logout = (callback = () => {}) => {
        localStorage.removeItem('user');
        localStorage.removeItem('access-token');
        refreshAuth();
        callback();
    }

    return(
        <AuthContext.Provider value={{ token, user, refreshAuth, logout}}>
           {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;