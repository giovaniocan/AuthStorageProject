import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import { MyButton } from "../components/MyButton";

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

export function NotificationScreen(){

    async function handleCallNotifications(){
        const {status} = await Notifications.getPermissionsAsync() 
    
        if(status !== 'granted'){
            Alert.alert("Você não deixou as notificações ativas")
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content:{ // o corpo da mensagem
                title: "Notificação",
                body:"Notification baby",
            },
            trigger:{ // gatilho, quanto tempo depois vamos mandar(dias, meses, dias da semnaa, e afins)
                    seconds:5,
            }
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Aqui vamos aprender a usar as notificações do aplicativo.
            </Text>
            <MyButton
                title="call notifications"
                onPress={handleCallNotifications}
            />
        </View>
    )
}