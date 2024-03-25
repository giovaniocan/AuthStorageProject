import { Text, View } from "react-native";
import { styles } from "./styles";
import { MyButton } from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen(){
    const navigation = useNavigation();
    
    const goToSettings = () => {
        navigation.navigate('Settings' as never); // Forçando a tipagem para 'never'
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
            <Text>
                by <Text style={styles.coffText}>GiovaniOcan</Text>
            </Text>
        </View>
    )
}