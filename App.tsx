import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text>PURPLESCHOOL</Text>
      <View style={styles.form}>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Pressable>
          <Text>Войти</Text>
        </Pressable>
      </View>
      <Text>Восстановить пароль</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 55,
  },
  content:{
    alignItems: 'center',
    gap: 50,
  },
  form:{
    alignSelf:'stretch',
    gap: 16,
  },
  input:{
    backgroundColor: '#2e2d3d'
  },
});
