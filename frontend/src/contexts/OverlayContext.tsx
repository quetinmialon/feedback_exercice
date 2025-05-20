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
    const [isLoginEmailAndPassword, setIsLoginEmail] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMask, setIsMask] = useState(false);
    const [isRegisterForm, setIsRegisterForm] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <OverlayContext.Provider value={{
            isMask, setIsMask,
            isRegisterForm, setIsRegisterForm,
            isLoginEmailAndPassword, setIsLoginEmail,
            isLoading, setIsLoading,
            email, setEmail
            }}>
            {children}
        </OverlayContext.Provider>
    );
};



