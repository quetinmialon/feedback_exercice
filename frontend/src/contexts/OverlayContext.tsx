import React, { createContext, useContext, useState } from "react";

import { OverlayContextModel, OverlayProviderProps } from "@models/Overlay";


// Create the connexion context
const OverlayContext = createContext<OverlayContextModel | undefined>(undefined);


/**
 * Hook to sur the connexion context
 * @returns 
 */
export const useOverlay = (): OverlayContextModel => {
    const context = useContext(OverlayContext);
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
export const OverlayProvider: React.FC<OverlayProviderProps> = ({ children }) => {
    const [isLoginChoice, setIsLoginChoice] = useState(false);
    const [isLoginEmail, setIsLoginEmail] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMask, setIsMask] = useState(false);
    const [isLoginPass, setIsLoginPass] = useState(false);
    const [isLoginReinit, setIsLoginReinit] = useState(false);
    const [isLoginCreate, setIsLoginCreate] = useState(false);
    const [isLoginSent, setIsLoginSent] = useState(false);
    const [email, setEmail] = useState("");
    const [isProfile, setIsProfile] = useState(false);

    return (
        <OverlayContext.Provider value={{
            isMask, setIsMask,
            isLoginPass, setIsLoginPass,
            isLoginReinit, setIsLoginReinit,
            isLoginCreate, setIsLoginCreate,
            isLoginSent, setIsLoginSent,
            isLoginChoice, setIsLoginChoice,
            isLoginEmail, setIsLoginEmail,
            isLoading, setIsLoading,
            email, setEmail,
            isProfile, setIsProfile
            }}>
            {children}
        </OverlayContext.Provider>
    );
};



