import { ReactNode, createContext, useState } from "react";
import { authService } from "../services/authService";

export interface AuthData{
    token: string
    email:string
    name:string
}

interface AuthContextType {
    authData?:AuthData
    signIn:(email:string, password:string) => Promise<AuthData>
    signOut:() => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>()

   async function signIn(email:string, password:string): Promise<AuthData>{
        const auth = await authService.signIn(email, password)
   
        setAuthData(auth)
         
        return auth
    }

    async function signOut():Promise<void>{
        setAuthData(undefined)
        return;
    }
    return(
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}