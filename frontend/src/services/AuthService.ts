/////////////////////////
/////   SERVICES   //////
/////////////////////////

// config importations
import { uri,color } from "../config";
import { checkEmailAndPasswordResponse, CreateAccountResponse } from "@models/Auth";


/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const checkEmailAndPassword = async (email: string, password: string): Promise<checkEmailAndPasswordResponse> => {
    try {
        const response = await fetch(`${uri.gateway}/user/auth`, {
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
            const data = await response.json();
            return data;
        }
        const data: checkEmailAndPasswordResponse = await response.json();
        console.log(color.bgGreen, "[SERVICE]","checkEmailAndPassword", data);

        return data;

    } catch (error: unknown) {
        console.error("Erreur dans checkEmailAndPassword:", error);
        throw new Error;
    }
};




/**
 * Service to get the carousel memos for the home page
 * @returns Promise<any[]>
 */
const createAccount = async (name: string, email: string, password: string, id_role: number): Promise<CreateAccountResponse> => {
console.log('', color.bgCyan, "[SERVICE]","createAccount", name, email, password, id_role);
    try {
        const response = await fetch(`${uri.gateway}/user/session?action=signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                name: name,
                email: email,
                password: password,
                id_role: id_role
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



export { checkEmailAndPassword, createAccount };
