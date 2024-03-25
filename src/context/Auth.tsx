import { ReactNode, createContext, useEffect, useState } from "react";
import { authService } from "../services/authService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthData{
    token: string
    email:string
    name:string
}

interface AuthContextType {
    authData?:AuthData
    signIn:(email:string, password:string) => void
    signOut:() => Promise<void>
    loading: boolean
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>()
    const [loading, setLoading] = useState(true)

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData') 
        if(auth){
            setAuthData(JSON.parse(auth) as AuthData)
        } 
        setLoading(false)
    }

    useEffect(() => {
        loadFromStorage()
    }, [])

   async function signIn(email:string, password:string){
       try {
        const auth = await authService.signIn(email, password)
   
        setAuthData(auth)
        AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
         
        return auth
       } catch (error ) {
            if (error instanceof Error) {
                Alert.alert(error.message, 'Try again');
            } else {
                Alert.alert('An error occurred', 'Try again');
            }
            throw error; // Se deseja propagar o erro para o chamador
        }
    }

    async function signOut():Promise<void>{
        setAuthData(undefined)
        AsyncStorage.removeItem('@AuthData')
        return;
    }
    return(
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
