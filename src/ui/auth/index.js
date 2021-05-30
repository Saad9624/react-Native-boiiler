import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Inside Login</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
