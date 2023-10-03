import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.backgroud}>
      <StatusBar  //Modifica stilo da statusbar do celular
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Home />
    </View>
  );
}


const styles = StyleSheet.create({

    backgroud: {
      flex: 1,
      backgroundColor: '#1A1A1A'
    }
  });