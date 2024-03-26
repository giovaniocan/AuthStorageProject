import { Text, View, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { MyButton } from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

import  * as SecureStore from 'expo-secure-store';
import { useState } from "react";



export function HomeScreen(){
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')


    const navigation = useNavigation();
    
    const goToSettings = () => {
        navigation.navigate('Settings' as never); // Forçando a tipagem para 'never'
    };

    const goToSecureStore = () => {
        navigation.navigate('SecureStore' as never); // Forçando a tipagem para 'never'
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Essa tela só pode ser vista por usuários autenticados
            </Text>
            <MyButton
                title="Ir para Configurações"
                onPress={goToSettings}
            />
            <MyButton
                title="Ir para Secure Storage" 
                onPress={goToSecureStore}
            />
            <Text>
                by <Text style={styles.coffText}>GiovaniOcan</Text>
            </Text>


        </View>
    )
}