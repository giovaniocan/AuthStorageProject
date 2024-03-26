import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { SecureStoreScreen } from "../screens/SecureStore";
import { NotificationScreen } from "../screens/NotificationScreen";


const Stack = createNativeStackNavigator();

export function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="SecureStore" component={SecureStoreScreen} />
            <Stack.Screen name="Notifications" component={NotificationScreen} />

        </Stack.Navigator>
    )
}