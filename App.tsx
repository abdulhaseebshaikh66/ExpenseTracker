/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <AppContent />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={{}}>Welcome to APP</Text>
      </View>
      <View style={styles.lower}>
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  upper: {
    flex: 1,
    backgroundColor: 'grey',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  lower: {
    flex: 1,
    backgroundColor: 'lightgrey',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});

export default App;
