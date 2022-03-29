import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Counter from './components/Counter';
import WeatherOverview from './components/WeatherOverview';
import ImagePickerExample from './components/ImagePickerExample';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Counter />

      <WeatherOverview />

      <ImagePickerExample />
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
