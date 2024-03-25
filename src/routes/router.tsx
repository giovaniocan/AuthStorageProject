import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";


export function Router(){
    const auth = false
    return(
        <NavigationContainer >
            {auth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}