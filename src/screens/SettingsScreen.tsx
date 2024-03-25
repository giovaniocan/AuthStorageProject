import {View, Text} from 'react-native';
import {MyButton} from '../components/MyButton';
import {styles} from './styles';

export function SettingsScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <MyButton
        style={{backgroundColor: 'red'}}
        title="Sair do App"
      />
    </View>
  );
}