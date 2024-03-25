import { AuthData } from "../context/Auth";

function signIn(email: string, password: string):Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456'){
                resolve({
                    token: 'fake-token',
                    email,
                    name: 'Giovani Ocan'
                })
            }else {
                reject(new Error('Invalid credentials'))
            }
        }, 500);
    })
}
export const authService = {signIn}