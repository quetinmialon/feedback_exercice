// Créer un fournisseur de contexte
import { ReactNode } from "react";


// Définir le type du contexte
export interface OverlayContextModel {
    isLoginChoice: boolean;
    isLoginEmail: boolean;
    isLoginPass: boolean;
    isLoginReinit: boolean;
    isLoginCreate: boolean;
    isLoginSent: boolean;
    isLoading: boolean;
    isMask: boolean;
    email: string;
    isProfile: boolean;
    setIsLoginChoice: (state: boolean) => void;
    setIsMask: (state: boolean) => void;
    setIsLoading: (state: boolean) => void;
    setIsLoginEmail: (state: boolean) => void;
    setIsLoginPass: (state: boolean) => void;
    setIsLoginReinit: (state: boolean) => void;
    setIsLoginCreate: (state: boolean) => void;
    setIsLoginSent: (state: boolean) => void;
    setEmail: (email: string) => void;
    setIsProfile: (state: boolean) => void;
    
}


export interface OverlayProviderProps {
    children: ReactNode;
}