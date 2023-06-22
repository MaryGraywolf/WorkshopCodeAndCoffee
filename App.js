import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
