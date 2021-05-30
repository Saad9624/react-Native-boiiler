import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';


const App=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>Inside App.js</Text>
      <Button
      testID="Button"
      title="Press me"
      onPress={()=>navigation.navigate('Login')}
      />

    </View>
  )
}

export default App ;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'center'
    }
})
