import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Counter from './components/Counter';
import WeatherOverview from './components/WeatherOverview';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Counter />

      <WeatherOverview />
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
