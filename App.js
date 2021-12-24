import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const s = StyleSheet.create({
  main: {
   
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#d8e2dc',

    
  },
  childMain: {
    paddingTop: 180,
    paddingBottom: 40,
    

  },
  font: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 250,
    

  },
});

function App() {
  return (
    <>
      <View style={s.main}>
        <View style={s.childMain}>
          <Text style={s.font}>Login</Text>
        </View>

        <View>
          <TextInput placeholderTextColor='black' style={s.input} placeholder="Email" />
          <TextInput placeholderTextColor='black' style={s.input} placeholder="Password" />
        </View>
        <Button title="    Login    " />
      </View>
    </>
  );
}

export default App;
