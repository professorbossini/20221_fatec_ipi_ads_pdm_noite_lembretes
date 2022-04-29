import {
  Button, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        {/* usuário vai inserir lembretes aqui */}
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
        />
        <Button 
          title="Adicionar lembrete"
        />
      </View>
      <View>
        {/* aqui será exibida a lista de lembretes */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  lembreteTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12
  }
});
