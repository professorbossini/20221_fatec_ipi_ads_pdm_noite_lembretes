import { useState } from 'react'
import {
  Button,
  ScrollView, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const[lembretes, setLembretes] = useState([])
  
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      //operador spread
      let aux = [lembrete, ...lembretes]
      setLembrete('')
      return aux
    })
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
          value={lembrete}
        />
        <Button
          disabled={lembrete.length === 0}
          title="Adicionar lembrete"
          onPress={adicionarLembrete}
        />
      </View>
      <ScrollView>
        {/* aqui será exibida a lista de lembretes */}
        {/* Fazer café => <Text>Fazer café</Text> */}
        {/* Ver um filme => <Text>Ver um filme</Text> */}
        {/* <Text>Fazer café</Text> */}
        {/* <Text>Ver um filme</Text> */}
        {
          lembretes.map(l => (
            <View 
              key={l}
              style={styles.itemNaLista}>
               <Text>{l}</Text>
            </View>
          ))
        }
      </ScrollView>
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
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
