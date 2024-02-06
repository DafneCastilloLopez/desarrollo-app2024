import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuarios from './src/components/Usuarios'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
      <Usuaruios usuarios="Fernando"/>
      <Usuarios usuarios= "Mariano"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
