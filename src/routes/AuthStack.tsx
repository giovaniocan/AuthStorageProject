import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignScreen } from "../screens/SignScreen";


const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignScreen} />
        </Stack.Navigator>
    )
}