import { useState } from 'react'
import {
  Button, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('') 
  
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        {/* usuário vai inserir lembretes aqui */}
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
        />
        <Button
          disabled={lembrete.length === 0}
          title="Adicionar lembrete"
        />
        <Text>{lembrete}</Text>
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
