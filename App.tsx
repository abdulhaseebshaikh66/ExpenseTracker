// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import {
//   Button,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { globalStyles } from './src/shared';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <AppContent />
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.upper}>
//         <Text style={globalStyles.title}>Welcome to APP</Text>
//       </View>
//       <View style={styles.lower}>
//         <View style={styles.textInputBox}>
//           <Text style={styles.inputTitle}>Enter a number:</Text>
//           <TextInput style={styles.txtInput} />
//           <Button title={"Store\nvalue"} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   upper: {
//     flex: 1,
//     backgroundColor: 'grey',
//     borderTopEndRadius: 20,
//     borderTopStartRadius: 20,
//   },
//   lower: {
//     flex: 1,
//     backgroundColor: 'lightgrey',
//     borderBottomEndRadius: 20,
//     borderBottomStartRadius: 20,
//   },
//   inputTitle: {
//     minWidth: '30%',
//   },
//   txtInput: { flex: 1, height: 100, backgroundColor: 'orange' },
//   textInputBox: { flexDirection: 'row', alignItems: 'center' },
// });

// export default App;
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

import NativeLocalStorage from './specs/NativeLocalStorage';

const EMPTY = '<empty>';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const [editingValue, setEditingValue] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem?.('myKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem?.(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default App;