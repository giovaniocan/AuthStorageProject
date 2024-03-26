import { Text, View, TextInput, Button, Alert } from "react-native";
import { styles } from "./styles";
import { MyButton } from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

import  * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { MyTextInput } from "../components/MyTextInput";



export function SecureStoreScreen(){
    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('(result)')

    async function save(key:string, value:string){
        await SecureStore.setItemAsync(key, value);
        setValue('')
        setKey('')
    }

    async function getValueFor(key:string){
        let result = await SecureStore.getItemAsync(key);
        if(result){
            setResult(result)
        }else{
            Alert.alert("Error", "Invalid Key")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Vamos fazer o teste do secure Store
            </Text>

            <MyTextInput placeholder="key" value={key} onChangeText={setKey}/>
            <MyTextInput placeholder="value" value={value} onChangeText={setValue}/>


            <MyButton
                title="Salvar"
                onPress={() => save(key, value)}
            />


            <Text style={styles.title}>
                Insira sua chave
            </Text>
            <MyTextInput placeholder="enter a key" onSubmitEditing={event => {getValueFor(event.nativeEvent.text)}} />

            <Text style={styles.title}>
                {result}
            </Text>


        </View>
    )
}