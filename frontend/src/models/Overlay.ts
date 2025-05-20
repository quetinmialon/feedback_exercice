// Créer un fournisseur de contexte
import { ReactNode } from "react";


// Définir le type du contexte
export interface OverlayContextModel {
    isLoginEmailAndPassword: boolean;
    isRegisterForm: boolean;
    isLoading: boolean;
    isMask: boolean;
    email: string;
    setIsMask: (state: boolean) => void;
    setIsLoading: (state: boolean) => void;
    setIsLoginEmail: (state: boolean) => void;
    setIsRegisterForm: (state: boolean) => void;
    setEmail: (email: string) => void;
}


export interface OverlayProviderProps {
    children: ReactNode;
}