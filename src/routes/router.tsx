import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator, View } from "react-native";
import { styles } from "../screens/styles";


export function Router(){
    const {authData, loading} = useAuth()

    if (loading) {
        // Exibe o ActivityIndicator enquanto o aplicativo está carregando
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return(
        <NavigationContainer >
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}