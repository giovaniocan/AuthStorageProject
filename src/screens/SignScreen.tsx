import { useState } from "react";
import { Image, Text, View } from "react-native";
import { Container } from "./styles";

import logo from '../assets/logo.png'
import { MyTextInput } from "../components/MyTextInput";
import { MyButton } from "../components/MyButton";



export function SignScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return(
        <Container>
            <Image 
                style={{width:100, height:100}}
                resizeMode="contain"
                source={logo}
            />
            
            <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail}/>
            <MyTextInput secureTextEntry placeholder="password" value={password} onChangeText={setPassword}/>

            <MyButton title="Sign In" />
        </Container>
    )
}