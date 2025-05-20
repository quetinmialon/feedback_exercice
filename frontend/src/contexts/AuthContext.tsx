import React, { createContext, useContext, useState } from "react";

import { AuthContextModel, AuthProviderProps } from "@models/Auth";


// Create the connexion context
const AuthContext = createContext<AuthContextModel | undefined>(undefined);


/**
 * Hook to sur the connexion context
 * @returns 
 */
export const useAuth = (): AuthContextModel => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useConnexion must be used within a ConnexionProvider");
    }
    return context;
};



/**
 * Provider to encapsulate the connexion context
 * @param param0 
 * @returns 
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isConnexion, setIsConnexion] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [uuid, setUuid] = useState("");



    const logout = () => {
        setIsConnexion(false);
        setUsername("");
        setEmail("");
        setAvatar("");
        setUuid("");
    };





    return (
        <AuthContext.Provider value={{ isConnexion, setIsConnexion, username, setUsername, email, setEmail, logout, setAvatar, avatar, uuid, setUuid }}>
            {children}
        </AuthContext.Provider>
    );
};



