/////////////////////////
/////   SERVICES   //////
/////////////////////////

// config importations
import { uri,color } from "../config";
import { CheckEmailResponse, CheckPasswordResponse, CheckUsernameResponse, CreateAccountResponse, CheckSessionResponse } from "@models/Auth";


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const checkEmail = async (email: string): Promise<CheckEmailResponse> => {

    try {
        const response = await fetch(`${uri.gateway}/user/email?action=check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                email: email
            })
        });


        if (!response.ok) {
            const data = await response.json();
            return data;
        }
        const data: CheckEmailResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","checkEmail", data);

        return data;

    } catch (error: unknown) {
        console.error("Erreur dans checkEmail:", error);
        throw new Error;
        
    }
};


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const checkPassword = async (password: string, email: string): Promise<CheckPasswordResponse> => {

    try {
        const response = await fetch(`${uri.gateway}/user/session?action=login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                email: email,
                password: password
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData.message);
            throw new Error;
        }

        const data: CheckPasswordResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","checkPassword", data);
        // Store the token in the local storage
        localStorage.setItem('token', data.token);

        return data;

    } catch (error: unknown) {
        console.error("Erreur inconnue", error);
        throw new Error;
    }
};


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const checkUsername = async (username: string): Promise<CheckUsernameResponse> => {

    try {
        const response = await fetch(`${uri.gateway}/user/username?action=check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'                
            },
            body : JSON.stringify({
                username: username
            })
        });
        
        const data: CheckUsernameResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","checkUsername", data);
        return data;

    } catch (error: unknown) {
        console.error("Erreur inconnue", error);
        throw new Error;
    }
};


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const createAccount = async (username: string, email: string): Promise<CreateAccountResponse> => {

    try {
        const response = await fetch(`${uri.gateway}/user/session?action=signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username: username,
                email: email
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData.message);
            throw new Error;
        }

        const data: CreateAccountResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","createAccount", data);

        return data;

    } catch (error: unknown) {
        console.error("Erreur inconnue", error);
        throw new Error;
    }
};


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const checkSession = async (sessionToken: string): Promise<CheckSessionResponse> => {

    try {
        const response = await fetch(`${uri.gateway}/user/session?action=check`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionToken}`
            }
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData.message);
            throw new Error;
        }

        const data: CheckSessionResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","checkSession", data);

        return data;

    } catch (error: unknown) {
        console.error("Erreur inconnue", error);
        throw new Error;
    }
};


export { checkEmail, checkPassword, checkUsername, createAccount, checkSession };
