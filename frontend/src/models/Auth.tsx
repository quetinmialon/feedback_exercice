// Créer un fournisseur de contexte
import { ReactNode } from "react";



// Définir le type du contexte
export interface AuthContextModel {
    isConnexion: boolean;
    setIsConnexion: (state: boolean) => void;
    username: string;
    setUsername: (username: string) => void;
    email: string;
    setEmail: (email: string) => void;
    logout: () => void;
    avatar: string;
    setAvatar: (avatar: string) => void;
    uuid: string;
    setUuid: (uuid: string) => void;
}



export interface AuthProviderProps {
    children: ReactNode;
}



export interface CheckEmailResponse {

        state: boolean;

}




export interface CheckPasswordResponse {
  
        messageKey: string;
        refreshToken: string;
        token: string;
        state: boolean;
}


export interface GetProfileResponse {
    data: {
        profile: [
            {
                id_user: number;
                user_name: string;
                user_email: string;
                user_nickname: string;
                user_hashpassword: string;
                user_avatar: string;
                user_birthdate: string | null;
                is_activated: boolean;
                registration_date: Date;
                id_role: number;
                user_uuid: string;
            }
        ]
    }
};




export interface CheckUsernameResponse {
    
        state: boolean;

}

export interface CheckSessionResponse {

        state: boolean;

}

export interface CreateAccountResponse {
        state: boolean;
}